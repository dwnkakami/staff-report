// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');  

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
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
    // if (err) throw err;
    console.log('Connected!');

    const sql ="insert into m_matter values(?,?,?,?,?,?,?,?,?,?,?)";
    console.log(req.body);

    con.query(sql,[req.body.name, req.body.com, req.body.money, req.body.place, req.body.persons, req.body.skill1, req.body.skill2, req.body.skill3, req.body.date, req.body.contents, req.body.skillcontents],(err, result, fields) => {
      if (err) throw err;
      res.send('Success!!');
    });
  });
}