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

    const sql = 'SELECT A1.id AS "area_id", A1.name AS "area", C1.id AS "company_id", C1.name AS "company", ES1.id AS "employment_id", ES1.name AS "employment", O1.id AS "occupation_id", O1.name AS "occupation" FROM m_company C1 LEFT JOIN m_area A1 ON C1.id = A1.id LEFT JOIN m_employment_system ES1 ON C1.id = ES1.id LEFT JOIN m_occupation O1 ON C1.id = O1.id';
    console.log(sql);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}