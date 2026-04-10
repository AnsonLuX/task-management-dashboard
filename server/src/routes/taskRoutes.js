import express from "express";
import { getTasks, 
        createTask, 
        getTaskById, 
        updateTask, 
        deleteTask} from "../controllers/taskController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getTasks);
router.get("/:id", protect, getTaskById);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

export default router;