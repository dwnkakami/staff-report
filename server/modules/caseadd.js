// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');  

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.postData = (req, res) => {
  const mysql = require('mysql');
  //  let leq = {
  //       'name': req.body.name,
  //       'com': req.body.com,
  //       'money': req.body.money,
  //       'place': req.body.place,
  //       'persons': req.body.persons,
  //       'skill1' : req.body.skill1,
  //       'skill2' :req.body.skill2,
  //       'skill3' :req.body.skill3,
  //       'date' : req.body.date,
  //       'contents': req.body.contents,
  //       'skillcontents': req.body.skillcontents,
  //   }

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'staff_report',
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql ="insert into m_matter (name,unit_cost,workplace,number_of_persons,staff_skill_id1,staff_skill_id2,staff_skill_id3,matter_start,business_content,note) values(?,?,?,?,?,?,?,?,?,?)"
    console.log(req.body); 

    con.query(sql,[req.body.name, req.body.unit_cost, req.body.workplace, req.body.number_of_persons, req.body.staff_skill_id1, req.body.staff_skill_id2, req.body.staff_skill_id3, req.body.matter_start, req.body.business_content, req.body.note],(err, result, fields) => {
      if (err) throw err;
      res.send('Success!!');

    const sql1 = "insert into m_company (name) values (?)"
    console.log(req.body);

    con.query(sql1,[req.body.name],(err,result,fields)=>{
      if (err) throw err;
      res.send('Success!!');
    })

    const sql2 = "insert into m_matter (customer_id) select id from m_company where m_company.id=m_company.name"
    console.log(req.body);

    con.query(sql2,[req.body.customer_id],(err,result,fields)=>{
      if (err) throw err;
      res.send('success!!');

    })
    });
   
  });
  }