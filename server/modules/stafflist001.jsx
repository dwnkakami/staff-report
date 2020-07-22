const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
    if (err) throw err;
    console.log('Connected!');

    const sql =  "SELECT S1.id ,S1.name ,S1.position ,C1.company_abbreviation ,MAX(M1.matter_end) AS matter_end FROM m_staff S1 JOIN m_company C1 ON S1.company_id = C1.id LEFT OUTER JOIN t_inquiry I1 ON S1.id = I1.staff_id LEFT OUTER JOIN m_matter M1 ON I1.matter_id = M1.id GROUP BY S1.id";
    // console.log(sql);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}