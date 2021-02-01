const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoModel = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("todo", todoModel);
