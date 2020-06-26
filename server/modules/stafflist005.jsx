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

        const sql = "SELECT S1.id AS スタッフ番号, S1.name AS スタッフ名, gender AS 性別, position AS 役職名, joining_day AS 入社日, birthday AS 誕生日, age AS 年齢, school_career AS 最終学歴, phone_number AS 連絡先, near_station AS 最寄駅, C1.name AS 所属会社, A1.name AS 勤務地域, O1.name AS 職種, E1.name AS 雇用形態 FROM m_staff AS S1 JOIN m_company AS C1 ON S1.company_id = C1.id JOIN m_area AS A1 ON S1.area_id = A1.id JOIN m_occupation AS O1 ON S1.occupation_id = O1.id JOIN m_employment_system AS E1 ON S1.employment_system_id = E1.id WHERE S1.id = " + req + " ORDER BY S1.id"
        con.query(sql,(err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
}