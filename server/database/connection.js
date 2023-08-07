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
    try
    {
        if (con)
        {
            console.log("Conectado em " + process.env.DB_HOST + " com sucesso");
        }
    }
    catch (err)
    {
        console.log(`Error: ${err}`);
    }
});

module.exports = db;