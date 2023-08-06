import { query } from "../../connection.js";

async function createFinancialsTable() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS financials (ID SERIAL PRIMARY KEY, debt INT, income INT, outgoings INT, balance INT, months INT);`
  );
  console.log(response.rows);
  console.log("financials table created succesfully");
}

createFinancialsTable();
