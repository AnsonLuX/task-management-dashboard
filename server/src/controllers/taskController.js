import { findAllTasks,
        insertTask,
        findTaskById,
        updateTaskById,
        deleteTaskById,
        findTasksByUserId,
 } from "../models/taskModel.js";


export const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await findTasksByUserId(userId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, due_date} = req.body;
    const user_id = req.user.id;

    const newTask = await insertTask({
      title,
      description,
      status,
      priority,
      due_date,
      user_id,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await findTaskById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch task" });
  }
};

export const updateTask = async (req,res) => {
    try {
    const { id } = req.params;
    const { title, description, status, priority, due_date, user_id } = req.body;

    const updatedTask = await updateTaskById(id, {
      title,
      description,
      status,
      priority,
      due_date,
      user_id,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to update task" });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await deleteTaskById(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully", task: deletedTask });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task" });
  }
};