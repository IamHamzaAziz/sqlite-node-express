import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

const sql = `CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);`

db.run(sql, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Table created successfully.');
    }
)

