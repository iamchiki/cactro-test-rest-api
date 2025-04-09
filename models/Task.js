const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
