require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'backinschool', 
  database: 'employee_tracker'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });

module.exports = db;