// setup server exporess and import db
const express = require("express");
const app = express();
const db = require("./db");

// port var
const PORT = 4000;

// get post ... methods

app.get("/", (req, res) => {
  res.json("GET Working on /");
});

// app listen

app.listen(PORT, () => {
  console.log(`${PORT} is working ..`);
});
