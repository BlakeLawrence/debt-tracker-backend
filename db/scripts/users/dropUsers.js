import { query } from "../../connection.js";

async function dropUsersTable() {
  await query(`DROP TABLE IF EXISTS users;`);
  console.log("Users Table deleted succesfully");
}

dropUsersTable();
