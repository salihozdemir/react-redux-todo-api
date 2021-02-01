const { remove } = require("./models/todo");
const Todo = require("./models/todo");

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({
      title,
    });
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const updateQuery = {};
    const { id } = req.params;
    const { title, completed } = req.body;
    console.log(completed);

    if (title) {
      updateQuery.title = title;
    }

    if (String(completed)) {
      updateQuery.completed = completed;
    }

    const todo = await Todo.findOneAndUpdate({ _id: id }, updateQuery, {
      returnOriginal: false,
    });
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

exports.deleteAllTodos = async (req, res, next) => {
  try {
    await Todo.deleteMany();
    res.json({ message: "Successfully deleted " });
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id });
    res.json(todo);
  } catch (error) {
    next(error);
  }
};
