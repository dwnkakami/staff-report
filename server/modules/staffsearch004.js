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
    database: 'staff_report'
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    
    const sql = 'SELECT TS1.level FROM staff_report.t_staff_skill AS TS1 GROUP BY level ORDER BY TS1.level ASC';
    // console.log(sql);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}