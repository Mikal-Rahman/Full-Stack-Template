const express = require("express");
const cors = require("cors");
const { Collection } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const app = express();

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "todo";
collection;

// Connection to Database
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} database`);
    db = client.db(dbName);
    collection = db.collection("todos");
  }
);

// --------Middleware---------
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // how objects are formatted when they travel back and forth.
app.use(cors());

// PORT
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
