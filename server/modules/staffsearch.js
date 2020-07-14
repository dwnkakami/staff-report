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
    
    const sql = 'SELECT S1.id, S1.name, S1.gender, S1.position, S1.age, C1.company_abbreviation, A1.name AS "area", O1.name AS "occupation", L1.name AS "license", S2.name AS "skill" FROM m_staff S1 LEFT JOIN m_company C1 ON S1.company_id = C1.id LEFT JOIN m_area A1 ON S1.area_id = A1.id LEFT JOIN m_occupation O1 ON S1.occupation_id = O1.id LEFT JOIN t_license_holder LH1 ON S1.id = LH1.staff_id LEFT JOIN m_license L1 ON LH1.license_id = L1.id LEFT JOIN t_staff_skill SS1 ON S1.id = SS1.staff_id LEFT JOIN m_skill S2 ON SS1.skill_id = S2.id';
    // console.log(sql);
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}