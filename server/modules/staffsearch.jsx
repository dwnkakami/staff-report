const express =require('express');
const app = express();
const bodyParser = require('body-Parser');

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

        const sql = "SELECT M1.position , M2.name , T1.level , M1.Age , M1.gender , M3.name FROM staff_report.m_staff AS M1 , staff_report.m_license AS M2 , staff_report.t_staff_skill AS T1 , staff_report.m_area AS M3" + req ;
        con.query(sql,(err, result, fields) => {
            if (err) throw err;
            res.json(result);
        });
    });
}