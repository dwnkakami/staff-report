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
      // 
    } catch (err) {
      console.log('err')
    }
    const sql = "select * from m_user where id = " + req;
    con.query(sql, (err, result, fields) => {
      try {
        var err = () => {throw err}
        // 
      } catch (err) {
        console.log('err')
      }
      res.json(result);
    });
  });
}