const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.postData = (req, res) => {
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

    const sql = "INSERT INTO m_staff (id, name, gender, position, joining_day, birthday, age, school_career, phone_number, near_station, company_id, area_id, occupation_id, employment_system_id, entry_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    console.log(req.body);
    con.query(sql,[req.body.id, req.body.name, req.body.gender, req.body.position, req.body.joining_day, req.body.birthday, req.body.age, req.body.school_career, req.body.phone_number, req.body.near_station, req.body.company_id, req.body.area_id, req.body.occupation_id, req.body.employment_system_id, req.body.entry_at], (err, result, fields) => {
      if (err) throw err;
      res.send('Success!');
    });
  });
}