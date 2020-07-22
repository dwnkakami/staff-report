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
        if(err) throw err;
        console.log('Connected');

        const sql = "SELECT staff_id staffnamber , S1.name AS skillname , experience AS experience , LEVEL AS level , assessment AS assessment , entry_at AS entry_at , update_at as update_at , update_by as update_dy FROM t_staff_skill AS S2 LEFT OUTER JOIN m_skill AS S1 ON S2.skill_id = S1.id WHERE staff_id = " + req + " order by skill_id";
        con.query(sql,(err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
}