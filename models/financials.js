import { query } from "../db/connection.js";

// get all financials data
export async function getFinancials() {
  const data = await query(`SELECT * FROM financials;`);
  console.log("here is the financials data:", data.rows);
  return data;
}
