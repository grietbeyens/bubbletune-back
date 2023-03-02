const Todo = require("../../../models/api/v1/Todo");

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

const create = (req, res, next) => {
  let todo = new Todo();
  todo.text = req.body.text;
  todo.user = req.body.user;
  todo.completed = req.body.completed;
  todo.save((err, doc) => {
    if (err) {
      res.json({
        status: "error",
        message: "Could not save this todo item.",
      });
    }
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
