// In-memory task store — seeded with sample data
let nextId = 4;

const tasks = [
  { id: 1, title: "Buy groceries", completed: false, createdAt: "2026-02-15T10:00:00Z" },
  { id: 2, title: "Write unit tests", completed: true, createdAt: "2026-02-15T11:30:00Z" },
  { id: 3, title: "Review pull request", completed: false, createdAt: "2026-02-15T14:00:00Z" },
];

export const getTasks = () => tasks;

export const getTaskById = (id) => tasks.find((t) => t.id === id);

export const addTask = (title) => {
  const task = {
    id: nextId++,
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
};

export const deleteTask = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;
  return tasks.splice(index, 1)[0];
};
