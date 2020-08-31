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
        if(err) throw err;
        console.log('Connected');

        const sql = "SELECT C2.name AS customer, S1.id AS staff_id, S1.name AS staff_name, date_format(M1.matter_start,'%Y/%m/%d') AS start_day ,date_format(M1.matter_end,'%Y/%m/%d') AS end_day, O1.name AS occupation, M1.workplace AS place, M1.unit_cost AS cost, M1.number_of_persons AS people, M1.name AS matter_name, M1.business_content AS matter_content, M1.skill_level_column AS skill_level, SS1.name AS skill_1, SS2.name AS skill_2, SS3.name AS skill_3, M1.note AS remark FROM m_staff AS S1 LEFT OUTER JOIN t_career AS C1 ON S1.id = C1.staff_id LEFT OUTER JOIN m_matter AS M1 ON C1.matter_id = M1.id LEFT OUTER JOIN m_skill AS S2 ON C1.skill_id = S2.id LEFT OUTER JOIN m_occupation AS O1 ON O1.id = M1.occupation_id LEFT OUTER JOIN m_customer AS C2 ON C2.id = M1.id LEFT OUTER JOIN  m_skill AS SS1 ON M1.staff_skill_id1 = SS1.id LEFT OUTER JOIN m_skill AS SS2 ON M1.staff_skill_id2 = SS2.id LEFT OUTER JOIN m_skill AS SS3 ON M1.staff_skill_id3 = SS3.id WHERE S1.id = "+ req + " ORDER BY M1.matter_start ASC";
        con.query(sql,(err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
}