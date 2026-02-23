const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "db",       // container name of mysql
  user: "root",
  password: "root123",
  database: "testdb"
});

db.connect(err => {
  if (err) {
    console.log("DB connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.send("Database error");

    let html = "<h1>User List</h1>";

    results.forEach(user => {
      html += `<p>${user.name}</p>`;
    });

    res.send(html);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
