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
<<<<<<< HEAD
    if (err) throw err;
    console.log('Connected!');
    const sql = "select * from m_user where id = " + req;
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
=======
    try {
      var err = () => {throw err}
      console.log('Connected!');
    } catch (err) {
      console.log('err')
    }
    const sql = "select * from m_user where id = " + req;
    con.query(sql, (err, result, fields) => {
      try {
        var err = () => {throw err}
        console.log('Connected!');
      } catch (err) {
        console.log('err')
      }
>>>>>>> c2651fbc7ff64347390fd6a356a13624c7354608
      res.json(result);
    });
  });
}