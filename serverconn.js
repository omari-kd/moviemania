// Get the client
// import { mysql } from "mysql2/promise";
const mysql = require("mysql2");

// Create connection to database
try {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "moviemania"
  });

  connection.connect(() => {
    console.log("Database Connected");
  });
} catch (err) {
  console.log(err);
}

module.exports = connection;
