const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req,res) => {
    const mysql =require('mysql');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staff_report'
    });

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        const sql = "SELECT M1.name, C1.name AS customer_name, M1.unit_cost, M1.workplace, M1.number_of_persons, M1.matter_start, M1.matter_end, M1.skill_level_column, M1.business_content, S1.name AS skill_name1, S2.name AS skill_name2, S3.name AS skill_name3, M1.note FROM m_matter AS M1 LEFT JOIN m_customer AS C1 ON M1.customer_id = C1.id LEFT JOIN m_skill AS S1 ON S1.id = M1.staff_skill_id1 LEFT JOIN m_skill AS S2 ON S2.id = M1.staff_skill_id2 LEFT JOIN m_skill AS S3 ON S3.id = M1.staff_skill_id3 WHERE M1.id = " + req;
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            res.json(result);
        });
        
        // const obj = JSON.parse(sql);
   
        // console.log(obj.matter_start);
        // console.log(obj.matter_end);
    
    });

}