import { query } from "../../connection.js";

async function dropFinancialsTable() {
  query(`DROP TABLE IF EXISTS financials;`);
  console.log("financials table deleted");
}

dropFinancialsTable();
