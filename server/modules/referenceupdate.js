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
    try {
      var err = () => {throw err}
      
    } catch (err) {
      console.log('err')
    }

    const sql = "UPDATE t_inquiry SET id = ?, matter_id = ?, staff_id = ?, occupation_id = ?, position = ?, interview_location = ?, interview_date = ?, interview_times = ?, entrance_date, note = ?, update_at = ?, update_by = ?";
    console.log(req.body);
    con.query(sql,[req.body.id, req.body.matter_id, req.body.staff_id, req.body.occupation_id, req.body.position, req.body.interview_location, req.body.interview_date, req.body.interview_times, req.body.entrance_date, req.body.note, req.body.update_at, req.body.update_by], (err, result, fields) => {
      try {
        var err = () => {throw err}
        
      } catch (err) {
        console.log('err')
      }
      res.send('Success!');
    });
  });
}