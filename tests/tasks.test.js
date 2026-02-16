import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("GET /health", () => {
  it("returns status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});

describe("GET /tasks", () => {
  it("returns an array of tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(3);
  });
});

describe("GET /tasks/:id", () => {
  it("returns a task by id", async () => {
    const res = await request(app).get("/tasks/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
    expect(res.body).toHaveProperty("title");
  });

  it("returns 500 for a non-existent task (known bug)", async () => {
    // This test documents the current broken behaviour.
    // The expected fix is to return 404 with { error: "Task not found" }.
    const res = await request(app).get("/tasks/9999");
    expect(res.status).toBe(500);
  });
});

describe("POST /tasks", () => {
  it("creates a new task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "New test task" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe("New test task");
    expect(res.body.completed).toBe(false);
  });

  it("rejects an empty title", async () => {
    const res = await request(app).post("/tasks").send({ title: "" });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  it("rejects a missing title", async () => {
    const res = await request(app).post("/tasks").send({});
    expect(res.status).toBe(400);
  });
});

describe("DELETE /tasks/:id", () => {
  it("deletes an existing task", async () => {
    // Create a task first, then delete it
    const created = await request(app)
      .post("/tasks")
      .send({ title: "To be deleted" });
    const res = await request(app).delete(`/tasks/${created.body.id}`);
    expect(res.status).toBe(204);
  });

  it("returns 404 for a non-existent task", async () => {
    const res = await request(app).delete("/tasks/9999");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});
