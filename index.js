const express = require("express");
const db = require("./src/dbconnect");

const app = express();

db.authenticate()
  .then(() => console.log("connected"))
  .catch(err => console.log("doslo je do greske", err));

const PORT = 3000;

app.listen(PORT, () => console.log("server running"));
