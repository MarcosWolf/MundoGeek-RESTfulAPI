const mysql = require("mysql");

require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.getConnection((err, con) => 
{
    if (err) {
        console.log(`MySQL error: ${err}`);
    }
});

module.exports = db;