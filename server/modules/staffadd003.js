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
    try {
      var err = () => {throw err}
      console.log('Connected!');
    } catch (err) {
      console.log('err')
    }

    const sql = 'SELECT id AS "employment_id", name AS "employment" FROM m_employment_system';
    con.query(sql, (err, result, fields) => {
      try {
        var err = () => {throw err}
        
      } catch (err) {
        console.log('err')
      }
      res.json(result);
    });
  });
}