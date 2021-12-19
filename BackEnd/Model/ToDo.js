const { Schema, model } = require("mongoose");

//create schema
const TodoSchema = Schema({
  title: String,
  isComplet: Boolean,
});

//create model from schema
const Todo = model("Todo", TodoSchema);

//export model
module.exports = Todo;
