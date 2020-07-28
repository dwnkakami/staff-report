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
    // multipleStatements: true
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    // const sql = "select MS1.id,MS1.name as skill_name,MO1.name as ocp_name,MU1.name as user_name from staff_report.m_skill as MS1 left join staff_report.m_occupation as MO1 on MS1.id = MO1.id left join staff_report.m_user as MU1 on MS1.id = MU1.id";
    const sql = "select * from staff_report.m_skill";
    con.query(sql , (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}
