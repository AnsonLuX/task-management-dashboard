INSERT INTO users (name, email, password_hash)
VALUES ('Xiaohui', 'xiaohui@example.com', 'test_hash');

INSERT INTO tasks (title, description, status, priority, due_date, user_id)
VALUES
  ('Build login page', 'Create login UI and form handling', 'todo', 'high', '2026-04-12', 1),
  ('Set up task API', 'Implement GET /api/tasks endpoint', 'in_progress', 'medium', '2026-04-13', 1),
  ('Connect PostgreSQL', 'Verify database connection and schema', 'done', 'high', '2026-04-10', 1);