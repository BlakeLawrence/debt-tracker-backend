import { query } from "../../connection.js";

const financials = [
  {
    debt: 1000,
    income: 2000,
    outgoings: 1800,
  },
  {
    debt: 9000,
    income: 3000,
    outgoings: 2300,
  },
  {
    debt: 5000,
    income: 3000,
    outgoings: 2800,
  },
];

async function populateFinancialsTable() {
  for (let i = 0; i < financials.length; i++) {
    let balance = Math.floor(financials[i].income - financials[i].outgoings);
    let months = Math.floor(financials[i].debt / balance);
    const response = await query(
      `INSERT INTO financials(debt, income, outgoings, balance, months) VALUES($1, $2,$3,$4,$5)RETURNING *;`,
      [
        financials[i].debt,
        financials[i].income,
        financials[i].outgoings,
        balance,
        months,
      ]
    );

    console.log(response.rows);
  }
  console.log("financials table populated succesfully");
}

populateFinancialsTable();
