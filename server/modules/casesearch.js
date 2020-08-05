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
    // const sql = "select * from staff_report.m_skill";
    const sql = "select MM1.id, MM1.name,MM1.customer_id,C1.name as customer_name,MM1.unit_cost,MM1.workplace,MM1.number_of_persons,MM1.matter_start,MM1.matter_end,MM1.occupation_id,MO1.name as ocp_name,MS1.id as skill1_id,MS1.name as skill1_name,MS2.id as skill2_id,MS2.name as skill2_name,MS3.id as skill3_id,MS3.name as skill3_name,MU1.id as user_id,MM1.skill_level_column,MM1.business_content,MM1.note,MU1.name as user_name from staff_report.m_matter MM1 left join staff_report.m_occupation MO1 on MM1.occupation_id = MO1.id left join staff_report.m_skill as MS1 on MM1.staff_skill_id1 = MS1.id left join staff_report.m_skill as MS2 on MM1.staff_skill_id2 = MS2.id left join staff_report.m_skill as MS3 on MM1.staff_skill_id3 = MS3.id left join staff_report.m_user as MU1 on MM1.user_id = MU1.id left join staff_report.m_customer as C1 ON MM1.customer_id = C1.id group by MM1.id";
    con.query(sql , (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}
