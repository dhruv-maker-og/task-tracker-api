import { Router } from "express";
import { getTasks, getTaskById, addTask, deleteTask, toggleTask } from "../data/store.js";

const router = Router();

// GET /tasks — list all tasks
router.get("/", (_req, res) => {
  res.json(getTasks());
});

// GET /tasks/:id — get a single task
// BUG: does not handle the case where the task is not found,
//      causing a 500 when accessing properties on undefined.
router.get("/:id", (req, res) => {
  const task = getTaskById(Number(req.params.id));
  // Intentionally missing: if (!task) return res.status(404).json(...)
  res.json({ id: task.id, title: task.title, completed: task.completed });
});

// POST /tasks — create a new task
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return res.status(400).json({ error: "title is required and must be a non-empty string" });
  }
  const task = addTask(title.trim());
  res.status(201).json(task);
});

// DELETE /tasks/:id — delete a task
router.delete("/:id", (req, res) => {
  const removed = deleteTask(Number(req.params.id));
  if (!removed) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(204).end();
});

// PATCH /tasks/:id — toggle task completion
router.patch("/:id", (req, res) => {
  const task = toggleTask(Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

export default router;
