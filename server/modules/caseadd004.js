const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'staff_report'
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql = 'SELECT id occupation_id , name occupation_name FROM m_occupation';
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}