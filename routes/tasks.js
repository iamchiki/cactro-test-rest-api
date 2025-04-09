const express = require("express");
const {
  addTaskController,
  getAllTaskController,
  updateTaskController,
  deleteTaskController,
} = require("../controllers/taskController");
const verifyUser = require("../middleware/verifyUser");

const router = express.Router();

router.post("/add-task", verifyUser, addTaskController);
router.get("/tasks", verifyUser, getAllTaskController);
router.put("/task/:id", verifyUser, updateTaskController);
router.delete("/task/:id", verifyUser, deleteTaskController);

module.exports = router;
