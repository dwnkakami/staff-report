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
        password: ''
    });

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        const sql = "SELECT M1.name ,C1.name AS customer_name ,M1.unit_cost ,M1.workplace ,M1.number_of_persons ,M1.matter_start ,M1.matter_end ,M1.skill_level_column ,M1.business_content ,M1.note FROM staff_report.m_matter AS M1 JOIN staff_report.m_customer AS C1 ON M1.customer_id = C1.id WHERE M1.id =" + req;
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            res.json(result);
        });
    });
}