
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'bibliotheque'
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE login = ? AND password = ?";
    db.query(sql, [req.body.login, req.body.password], (err, data) => {
        if (err) {
            console.log("Error Login");
            return res.json("Error Login");
        }
        if (data.length > 0) {
            console.log("Login Succesful");
            return res.json("Login Succesful")
        } else {
            console.log("Login Failed");
            return res.json("Login Failed")
        }

    })
})

app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (`id`, `firstname`, `name`, `login`, `password`) VALUES (NULL, ?, ?, ?, ?)";
    db.query(sql, [req.body.firstname, req.body.name, req.body.login, req.body.password], (err, data) => {
        if (err) {
            console.log("Error Registration");
            return res.json("Error Registration");
        } else {
            console.log("Registration Succesful");
            return res.json("Registration Succesful")
        }

    })
})

app.get('/', (re, res) => {
    return res.json("from backend side");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, () => {
    console.log("listening");
})