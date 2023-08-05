import { query } from "../../connection.js";

let initialUsersTable = [
  {
    name: "Helen",
    surname: "Mackay",
    email: "helenMac@yahoo.co.uk",
  },
  ,
  {
    name: "Blake",
    surname: "Lawrence",
    email: "blake-lawrence@yahoo.co.uk",
  },
];

async function populateUsersTable() {
  for (let i = 0; i < initialUsersTable.length; i++) {
    const response = await query(
      `INSERT INTO users (name, surname, email) VALUES ($1,$2 ,$3) RETURNING *;`,
      [
        initialUsersTable[i].name,
        initialUsersTable[i].surname,
        initialUsersTable[i].email,
      ]
    );

    console.log(response.rows);
  }
  console.log("Users Table populated succesfully");
}

populateUsersTable();
