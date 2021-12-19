// setup server exporess and import db
const express = require("express");
const res = require("express/lib/response");
const app = express();
const db = require("./db");
//middle Ware to read body
app.use(express.json());
// import model
const Todo = require("./Model/ToDo");
// port var
const PORT = 4000;

// get post ... methods

//get /
app.get("/", (req, res) => {
  res.json("GET Working on /");
});

//get /all To Do
app.get("/tasks", (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      res.json(data);
      console.log("ddd", data);
    }
  });
});

// post to db
app.post("/tasks", (req, res) => {
  Todo.create(req.body, (err, newTask) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      res.json("task created successfully" + newTask);
    }
  });
});

// app listen

app.listen(PORT, () => {
  console.log(`${PORT} is working ..`);
});
