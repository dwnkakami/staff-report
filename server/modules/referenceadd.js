const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//body-Parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.postData = (req,res) => {
    const mysql =require('mysql');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staff_report'
    });

    con.connect((err) => {
        if (err) throw err;
        console.log('Reference Connected!');

        const sql = "INSERT INTO t_inquiry values(?,?,?,?,?,?,?,?,?,?)" + req;
        console.log(req, body);
        con.query(sql, [req.body.id,req.body.matter_id,req.body.staff_id,req.body.occupation_id,req.body.potision,req.body.interview_date,req.body.interview_location,req.body.note,req.body.entrance_date,req.body.entry_at], 
            (err, result, fields) => {
            if (err) throw err;
            res.send('Success!');
        });
    });
}