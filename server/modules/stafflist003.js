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

        const sql = "SELECT S1.id AS スタッフ番号, S1.name AS スタッフ名, M1.matter_start AS 開始日, M1.matter_end AS 終了日, O1.name AS 職種, M1.workplace AS 場所, M1.unit_cost AS コスト, M1.number_of_persons AS 人数, M1.name AS 案件名, M1.business_content AS 案件内容, M1.skill_level_column AS 技能レベル, M1.note AS 備考, S2.name AS 言語 FROM m_staff AS S1 LEFT OUTER JOIN t_career AS C1 ON S1.id = C1.staff_id LEFT OUTER JOIN m_matter AS M1 ON C1.matter_id = M1.id LEFT OUTER JOIN m_skill AS S2 ON C1.skill_id = S2.id LEFT OUTER JOIN m_occupation AS O1 ON O1.id = M1.occupation_id WHERE S1.id = " + req + " ORDER BY S1.id";
        con.query(sql,(err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
}