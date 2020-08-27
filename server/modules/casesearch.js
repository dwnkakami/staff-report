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
    try {
      var err = () => {throw err}
      console.log('Connected!');
    } catch (err) {
      console.log('err')
    }

    // const sql ="select * from staff_report.m_matter where id =" + req;
    const sql ="select * from m_matter MM1 left join m_occupation MO1 on MM1.occupation_id = MO1.id left join m_skill MS1  on MM1.staff_skill_id1 = MS1.id left join m_skill MS2 on MM1.staff_skill_id2 = MS2.id left join m_skill MS3 on MM1.staff_skill_id3 = MS3.id where MM.id = " + req;

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