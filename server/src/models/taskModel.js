import pool from "../config/db.js";

export const findAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
  return result.rows;
};

export const insertTask = async ({
    title,
    description,
    status,
    priority,
    due_date,
    user_id,
}) => {
    const result = await pool.query(
    `
    INSERT INTO tasks (title, description, status, priority, due_date, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `,
    [title, description, status, priority, due_date, user_id]
  );

  return result.rows[0];
}

export const findTaskById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM tasks WHERE id = $1", [id]
    );
    return result.rows[0];
}

export const findTasksByUserId = async (userId) => {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC",
    [userId]
  );

  return result.rows;
};

export const updateTaskById = async (
  id,
  { title, description, status, priority, due_date, user_id }
) => {
  const result = await pool.query(
    `
    UPDATE tasks
    SET title = $1,
        description = $2,
        status = $3,
        priority = $4,
        due_date = $5,
        user_id = $6,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = $7
    RETURNING *
    `,
    [title, description, status, priority, due_date, user_id, id]
  );

  return result.rows[0];
};

export const deleteTaskById = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM tasks
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};