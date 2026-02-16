import express from "express";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Task routes
app.use("/tasks", taskRoutes);

export default app;
