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
    const sql = " select MU1.id AS id , MU1.name AS name , MAA1.name AS access_name , MAA1.id AS access_id from m_user MU1 join m_role MR1 on MU1.role_id = MR1.id join m_role_detail MRD1 on MU1.role_id = MRD1.role_id join m_access_authority MAA1 on MRD1.access_id = MAA1.id where MU1.id =  " + req;
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
