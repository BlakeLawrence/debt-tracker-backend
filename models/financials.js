import { query } from "../db/connection.js";

// get all financials data
export async function getFinancials() {
  const data = await query(`SELECT * FROM financials;`);
  console.log("here is the financials data:", data.rows);
  return data;
}
// Add a persons financial data
export async function addFinancials(postBody) {
  const { debt, income, outgoings, balance, months } = postBody;
  const data = await query(
    `INSERT INTO financials (debt, income, outgoings, balance, months) VALUES($1, $2, $3, $4, $5)RETURNING *;`,
    [debt, income, outgoings, balance, months]
  );
  return data;
}
