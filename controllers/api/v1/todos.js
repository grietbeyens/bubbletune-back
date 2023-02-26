const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  text: String,
  user: String,
  completed: Boolean,
});
const Todo = mongoose.model("Todo", todoSchema);

const getAll = (req, res) => {
  Todo.find({ user: "Griet" }, (err, docs) => {
    if (!err) {
      res.json({
        status: "succes",
        data: {
          todos: docs,
        },
      });
    }
  });
};

const create = (req, res) => {
  let todo = new Todo();
  todo.text = "My first todo";
  todo.user = "Griet";
  todo.completed = false;
  todo.save((err, doc) => {
    if (!err) {
      res.json({
        status: "succes",
        data: {
          todo: doc,
        },
      });
    }
  });
};

const update = (req, res) => {
  /* res.send("PUT todos"); */
  res.json({
    status: "succes",
    data: {
      text: "UPDATED todo with id ",
    },
  });
};

const remove = (req, res) => {
  /* res.send("DELETE todo " + req.params.id); */
  res.json({
    status: "succes",
    data: {
      text: "REMOVED todo with id ",
    },
  });
};

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
