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
    password: ''
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    
    const sql = 'SELECT * FROM m_staff AS S1 LEFT OUTER JOIN m_area AS A1 ON S1.area_id = A1.id LEFT OUTER JOIN m_license AS L1 ON S1.id = L1.id LEFT OUTER JOIN m_occupation AS O1 ON S1.occupation_id = O1.id LEFT OUTER JOIN m_company AS C1 ON S1.company_id = C1.id LEFT OUTER JOIN m_skill AS S2 ON S1.id = S2.id LEFT OUTER JOIN m_employment_system AS E1 ON S1.employment_system_id = E1.id LEFT OUTER JOIN t_license_holder AS TI ON S1.id = TI.staff_id LEFT OUTER JOIN t_staff_skill AS TS ON S1.id = TS.staff_id;' +req;
    console.log(sql);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}