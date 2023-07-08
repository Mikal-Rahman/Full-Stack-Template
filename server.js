const express = require("express");
const cors = require("cors");
const { Collection } = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const app = express();

let db,
  dbConnectionStr = process.env.DB_CONNECTION_STRING,
  dbName = "todo";
Collection;

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} database`);
    db = client.db(dbName);
    collection = db.collection("todos");
  }
);

// PORT
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
