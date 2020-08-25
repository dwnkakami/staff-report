// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
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
    
    // const sql ="select * from staff_report.m_matter where id =" + req;
    const sql ="SELECT M1.id ,M1.name ,C1.name customer_name,MU1.name as user_name ,M1.unit_cost ,M1.workplace ,M1.number_of_persons ,M1.matter_start ,M1.matter_end ,S1.name skill1 ,S2.name skill2 ,S3.name skill3 ,M1.skill_level_column ,M1.business_content ,M1.note, O1.name AS occupation FROM m_matter M1 JOIN m_customer C1 ON M1.customer_id = C1.id LEFT OUTER JOIN m_skill S1 ON M1.staff_skill_id1 = S1.id LEFT OUTER JOIN m_skill S2 ON M1.staff_skill_id2 = S2.id LEFT OUTER JOIN m_skill S3 ON M1.staff_skill_id3 = S3.id LEFT OUTER JOIN m_occupation AS O1 ON O1.id = M1.occupation_id left join m_user as MU1 on M1.user_id = MU1.id group by M1.id";
    
    con.query(sql, (err, result, fields) => {
      try {
        var err = () => {throw err}
      } catch (err) {
        console.log('err')
      }
      res.json(result);
    });
  });
}