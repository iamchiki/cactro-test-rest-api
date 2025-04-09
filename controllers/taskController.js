const Task = require("../models/Task");

const addTaskController = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const task = new Task({
      title,
      description,
      status,
      user: req.user._doc._id,
    });

    await task.save();

    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTaskController = async (req, res, next) => {
  try {
    const { _id: userId } = req.user._doc;

    const tasks = await Task.find({ user: userId });

    res.status(200).json({ message: "All tasks fetchd sudcessfully", tasks });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTaskController = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._doc._id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(201).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTaskController = async (req, res, next) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user._doc._id,
    });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addTaskController,
  getAllTaskController,
  updateTaskController,
  deleteTaskController,
};
