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
        password: ''
    });

    con.connect((err) => {
        if(err) throw err;
        console.log('Connected');

        const sql = "SELECT staff_id AS スタッフ番号, S1.name AS スキル名称, experience AS 経験年数, LEVEL AS スキルレベル, assessment AS 自己評価, entry_at AS 登録日時,update_at as 更新日時,update_by as 最終更新者 FROM staff_report.t_staff_skill AS S2 JOIN staff_report.m_skill AS S1 ON S2.skill_id = S1.id order by skill_id";
        con.query(sql,(err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
}