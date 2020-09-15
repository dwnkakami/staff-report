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
    try {
      var err = () => {throw err}
      console.log('Connected!');
    } catch (err) {
      console.log('err')
    }

    const sql = "SELECT S1.id, S1.name, S1.kana, P1.name position, C1.company_abbreviation, date_format(MAX(M1.matter_end),'%Y/%m/%d') matter_end, CASE WHEN matter_end IS null THEN '9999/99/99' WHEN matter_end IS NOT null THEN MAX(matter_end) END matter_end2 FROM m_staff S1 JOIN m_position P1 ON S1.position_id = P1.id JOIN m_company C1 ON S1.company_id = C1.id LEFT JOIN t_inquiry I1 ON S1.id = I1.staff_id LEFT JOIN m_matter M1 ON I1.matter_id = M1.id GROUP BY S1.id";
    con.query(sql, (err, result, fields) => {
      try {
        var err = () => {throw err}
        console.log('Connected!');
      } catch (err) {
        console.log('err')
      }
      res.json(result);
    });
  });
}