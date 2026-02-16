# Task Tracker API

A simple REST API for managing tasks, built with Node.js and Express.

## Quick Start

```bash
npm install
npm start
```

The server will start on `http://localhost:3000`.

## Task Object

A task has the following structure:

```json
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2026-02-15T10:00:00Z"
}
```

## API Endpoints

### Health Check

**GET /health**

Check if the API is running.

```bash
curl http://localhost:3000/health
```

**Response** (200 OK):
```json
{
  "status": "ok"
}
```

---

### List All Tasks

**GET /tasks**

Retrieve all tasks.

```bash
curl http://localhost:3000/tasks
```

**Response** (200 OK):
```json
[
  {
    "id": 1,
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2026-02-15T10:00:00Z"
  },
  {
    "id": 2,
    "title": "Write unit tests",
    "completed": true,
    "createdAt": "2026-02-15T11:30:00Z"
  }
]
```

---

### Get a Single Task

**GET /tasks/:id**

Retrieve a specific task by ID.

```bash
curl http://localhost:3000/tasks/1
```

**Response** (200 OK):
```json
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false
}
```

> **Note**: This endpoint returns only `id`, `title`, and `completed` fields. The `createdAt` field is not included in single task responses.

**Error Response** (404 Not Found):
```json
{
  "error": "Task not found"
}
```

---

### Create a Task

**POST /tasks**

Create a new task.

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries"}'
```

**Request Body**:
```json
{
  "title": "Buy groceries"
}
```

**Response** (201 Created):
```json
{
  "id": 4,
  "title": "Buy groceries",
  "completed": false,
  "createdAt": "2026-02-16T14:24:00Z"
}
```

**Error Response** (400 Bad Request):
```json
{
  "error": "title is required and must be a non-empty string"
}
```

---

### Delete a Task

**DELETE /tasks/:id**

Delete a task by ID.

```bash
curl -X DELETE http://localhost:3000/tasks/1
```

**Response** (204 No Content):
```
(empty response body)
```

**Error Response** (404 Not Found):
```json
{
  "error": "Task not found"
}
```

---

## Error Responses

The API uses standard HTTP status codes and returns errors in JSON format.

### Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 OK | Request successful |
| 201 Created | Resource created successfully |
| 204 No Content | Request successful, no content to return |
| 400 Bad Request | Invalid request (e.g., missing or invalid fields) |
| 404 Not Found | Resource not found |
| 500 Internal Server Error | Unexpected server error |

### Error Format

All errors return a JSON object with an `error` field:

```json
{
  "error": "Descriptive error message"
}
```

**Examples**:
- Missing or empty title: `{ "error": "title is required and must be a non-empty string" }`
- Task not found: `{ "error": "Task not found" }`

---

## Running Tests

```bash
npm test
```

## License

MIT
