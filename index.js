const express = require("express");
const app = express();
const path = require("path");
let dbpath = path.join(__dirname, "goodreads.db");
const { open } = require("sqlite");
let db = null;

const intializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbpath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DBError:${e.message}`);
    process.exit(1);
  }
};
intializeDBAndServer();
