const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = mysql.createConnection({
  host: process.env.ENV_HOST,
  user: process.env.ENV_USER,
  password: process.env.ENV_PASSWORD,
  database: process.env.ENV_DATABASE,
});

app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE login = ? AND password = ?';
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.log('Error Login');
      return res.json('Error Login');
    }
    if (data.length > 0) {
      console.log('Login Succesful');
      return res.json('Login Succesful');
    } else {
      console.log('Login Failed');
      return res.json('Login Failed');
    }
  });
});

app.post('/register', (req, res) => {
  const sql =
    'INSERT INTO users (`id`, `firstname`, `name`, `login`, `password`) VALUES (NULL, ?)';
  const values = [
    req.body.firstname,
    req.body.name,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log('Error Registration');
      return res.json('Error Registration');
    } else {
      console.log('Registration Succesful');
      return res.json('Registration Succesful');
    }
  });
});

app.get('/', (re, res) => {
  return res.json('from backend side');
});

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(process.env.ENV_PORT, () => {
  console.log('listening');
});
