const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

exports.getData = (req,res) => {
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
            
          } catch (err) {
            console.log('err')
          }

        const sql = "SELECT staff_id AS staff_id, S1.name AS skillname, experience AS experience, LEVEL AS level, assessment AS assessment, S2.entry_at AS entry_at, S2.update_at AS update_at, S2.update_by AS update_dy FROM t_staff_skill AS S2  LEFT OUTER JOIN m_skill AS S1 ON S2.skill_id = S1.id LEFT OUTER JOIN m_staff AS S3 ON S2.staff_id = S3.id WHERE staff_id = " + req + " ORDER BY skill_id";
        con.query(sql,(err, result, fields) => {
            try {
                var err = () => {throw err}
                
              } catch (err) {
                console.log('err')
              }
            res.json(result);
        });
    });
}