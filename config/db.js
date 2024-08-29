const mysql = require('mysql2');
// const { connect } = require('../routes/auth');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3307
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.stack);
//     return;
//   }
//   console.log('Connected to the MySQL database.');
// });
connection.connect((err) => {
    if (err) return console.log("Error Connecting to DB")
    console.log("Connected to DB: ", connection.threadId);


    // create a database
    connection.query(`CREATE DATABASE IF NOT EXISTS expense_tracker`, (err, result) => {
        if (err) return console.log(log);

        console.log("Database created successfully");

        // select the database
        connection.changeUser({ database: 'expense_tracker' }, (err) => {
            if (err) return console.log(err);
            console.log("database changed to expense_tracker");

        // Alternative way of changing the db
        // db.query('USE my_expense_tracker', (err, result) =>{
        //     if(err) return console.log(err);
        //     console.log("Database changed")
        // });
            // create users table
            const createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(255) NOT NULL UNIQUE,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            )
            `;

            connection.query(createUsersTable, (err, result) => {
                if (err) return console.log(err);

                console.log('Table created successfully');
            });
        });

    });
});

module.exports = connection;