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
    password: ''
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    // const sql ="select * from staff_report.m_matter where id =" + req;
    // const sql ="select MM1.id,MM1.occupation_id,MO1.name as ocp_name,MS1.id as skill1_id,MS1.name as skill1_name,MS2.id as skill2_id,MS2.name as skill2_name,MS3.id as skill3_id,MS3.name as skill3_name from staff_report.m_matter MM1 left join staff_report.m_occupation MO1 on MM1.occupation_id = MO1.id left join staff_report.m_skill as MS1  on MM1.staff_skill_id1 = MS1.id left join staff_report.m_skill as MS2 on MM1.staff_skill_id2 = MS2.id left join staff_report.m_skill as MS3 on MM1.staff_skill_id3 = MS3.id group by MM1.id;";
    const sql ="select * from staff_report.m_skill";
    con.query(sql , (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}