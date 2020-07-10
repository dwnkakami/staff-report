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
    multipleStatements: true
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    // const ocp ="select MO1.id as ocp_id,MO1.name as ocp_name from staff_report.m_occupation as MO1";
    // const skl ="select MS1.id as skl_id, MS1.name as skl_name from staff_report.m_skill as MS1";
    // const sql = ocp  skl;
    con.query('select MO1.id as ocp_id,MO1.name as ocp_name from staff_report.m_occupation as MO1;select MS1.id as skl_id, MS1.name as skl_name from staff_report.m_skill as MS1;' , (err, result, fields) => {
      if (err) throw err;
      res.json(result);
      // console.log(result);
      // console.log(result[1]);
    });
  });
}

// const http = require('http');
// const html = require('fs').readFileSync('src/pages/casesearch/CaseSearch.jsx');

// http.createServer(function(req,res) {

//   if(req.method === 'GET') {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.end(html);

//   } else if(req.method === 'POST') {
//     var keydata = '';

//     //POSTデータを受け取る
//     req.on('data',function(chunk) {keydata += chunk})
//        .on('end',function() {

//         console.log(keydata);
//         res.end(html);
//        })
//   }
// }).listen(8080);