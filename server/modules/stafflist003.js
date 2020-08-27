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
            console.log('Connected!');
          } catch (err) {
            console.log('err')
          }
        const sql = "SELECT C1.id AS 経歴番号, C1.staff_id AS スタッフ番号, M1.name AS 案件名, M1.number_of_persons AS 人数, M1.matter_start AS 開始日, M1.matter_end AS 終了日, M1.business_content 案件内容, note AS 備考, O1.name AS 職種 FROM t_career AS C1 JOIN m_matter AS M1 ON C1.matter_id = M1.id JOIN m_skill AS S1 ON C1.skill_id = S1.id JOIN m_occupation AS O1 ON M1.occupation_id = O1.id WHERE C1.staff_id = " + req + " ORDER BY C1.id";
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