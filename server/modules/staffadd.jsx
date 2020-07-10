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
    password: ''
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql = "INSERT INTO m_staff ('id', 'name', 'gender', 'position', 'joining_day', 'birthday', 'age', 'school_career', 'phone_number', 'near_station', 'company_id', 'area_id', 'occupation_id', 'employment_system_id') VALUE ";
    console.log(sql);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}