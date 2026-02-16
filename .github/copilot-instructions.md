# Project Conventions for Copilot

## Overview
This is a minimal Node.js/Express REST API called **Task Tracker**.
It uses an in-memory array as its data store (no database).

## Code Style
- Use **ES modules** (`import`/`export`) — the project has `"type": "module"` in package.json.
- Use `const` by default; use `let` only when reassignment is needed.
- Prefer **arrow functions** for callbacks and middleware.
- Use **early returns** to reduce nesting.
- Always return proper HTTP status codes (200, 201, 204, 400, 404, 500).

## API Design
- Follow RESTful conventions: nouns as resource paths, HTTP verbs for actions.
- Return JSON for all responses including errors: `{ "error": "message" }`.
- Validate request bodies and return `400 Bad Request` with a descriptive message on invalid input.

## Testing
- Tests use **Vitest** and **Supertest**.
- Test files live in `tests/` and are named `*.test.js`.
- Each endpoint should have at least one happy-path and one error-path test.
- Do **not** start the server with `app.listen()` in tests — export the Express `app` and pass it to Supertest.

## File Structure
```
src/
  index.js      — server entry point (starts listening)
  app.js        — Express app setup and route registration
  routes/
    tasks.js    — /tasks route handlers
  data/
    store.js    — in-memory data store
tests/
  tasks.test.js — API tests
```
