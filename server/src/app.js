import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/auth",authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;