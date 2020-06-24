// ライブラリ読み込み
const express = require('express');
const app = express();
const mysql = require('mysql');

exports.getData = (req, res) => {
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });
  
    con.connect((err) => {
      if (err) throw err;
      console.log('Connected!');
  
      const sql = "SELECT * FROM staff_report.m_matter WHERE id=1";
      con.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
      });
    });
}
