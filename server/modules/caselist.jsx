// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// //URL分岐
// app.get('/', (req, res) => {
//     res.send('');
// });
// app.get('/api/caselist/', (req, res) => {
//     res.send('');
// });

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
  
      const sql = "select * from staff-report.m_matter where id=1";
      con.query(sql, (err, result, fields) => {
        if (err) throw err;
        res.json(result);
      });
    });
}

// mysql.getData();
// app.listen(4000);
console.log('server listen ...');