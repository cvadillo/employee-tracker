const mysql = require('mysql2')
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'human_resources'
    },
    console.log('Connected to the human_resources database')
);

module.exports = db;