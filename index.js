import express from 'express'
import sqlite3 from 'sqlite3'

const app = express()
app.use(express.json())

const db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.send(rows);
    });
});

// app.post('/users', (req, res) => {
//     const { name, email } = req.body;
//     const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
//     db.run(sql, [name, email], (err) => {
//       if (err) {
//         return console.error(err.message);
//       }
//       res.send('User added successfully.');
//     });
// });

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const sql = `INSERT INTO users (name, email) VALUES (${name}, ${email})`;
    db.run(sql, (err) => {
        if (err) {
            return console.error(err.message);
        }
        res.send('User added successfully.');
    });
});


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})


