const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

exports.getData = (req,res) => {
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

        const sql = "SELECT S1.id AS staff_id, S1.name AS staff_name, gender AS gender, P1.name AS position, date_format(joining_day,'%Y/%m/%d') AS joining_day, date_format(birthday,'%Y/%m/%d') AS birthday, age AS age, school_career AS school_career, phone_number AS phone_number, near_station AS station, C1.name AS company, O1.name AS occupation, E1.name AS employment_system, M1.name AS matter_name, date_format(M1.matter_end,'%Y/%m/%d') AS end_day FROM m_staff AS S1 JOIN m_position P1 ON S1.position_id = P1.id JOIN m_company AS C1 ON S1.company_id = C1.id LEFT OUTER JOIN m_occupation AS O1 ON S1.occupation_id = O1.id JOIN m_employment_system AS E1 ON S1.employment_system_id = E1.id LEFT OUTER JOIN t_career AS C2 ON C2.staff_id = S1.id LEFT OUTER JOIN m_matter AS M1 ON M1.id = C2.matter_id WHERE S1.id = " + req + " ORDER BY S1.id"
        con.query(sql,(err, result, fields) => {
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
