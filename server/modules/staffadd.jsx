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
    database: 'staff_report',
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql = "INSERT INTO SELECT S1.id, S1.name, S1.gender, S1.position, S1.joining_day, S1.birthday, S1.age, S1.school_career, S1.phone_number, S1.near_station, C1.name AS 'company', A1.name AS 'area', O1.name AS 'occupation', ES1.name AS 'employment' FROM m_staff S1 LEFT JOIN m_company C1 ON S1.company_id = C1.id LEFT JOIN m_area A1 ON S1.area_id = A1.id LEFT JOIN m_occupation O1 ON S1.occupation_id = O1.id LEFT JOIN m_employment_system ES1 ON S1.employment_system_id = ES1.id VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    console.log(req.body);
    con.query(sql,[req.body.id, req.body.name, req.body.gender, req.body.position, req.body.joining_day, req.body.birthday, req.body.age, req.body.school_career, req.body.phone_number, req.body.near_station, req.body.company, req.body.area, req.body.occupation, req.body.employment], (err, result, fields) => {
      if (err) throw err;
      res.send('Success!');
    });
  });
}