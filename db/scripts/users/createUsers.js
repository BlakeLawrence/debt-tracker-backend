import { query } from "../../connection.js";

async function createUsersTable() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, surname TEXT, email TEXT);`
  );

  console.log(response.rows);
  console.log("users table created succesfully");
}

createUsersTable();
