// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
<<<<<<< HEAD
//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
exports.getData = (req, res) => {
    const mysql = require('mysql');
=======

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
    const mysql = require('mysql');

>>>>>>> b51623d29afdf270f201fb6e628ab027a2a2149e
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });
    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
<<<<<<< HEAD
=======

>>>>>>> b51623d29afdf270f201fb6e628ab027a2a2149e
        const sql = "SELECT M1.name ,S1.name AS staff_id ,C1.customer_abbreviation ,I1.note ,C2.company_abbreviation FROM staff_report.t_inquiry AS I1 JOIN staff_report.m_matter AS M1 ON I1.matter_id = M1.id JOIN staff_report.m_staff AS S1 ON I1.staff_id = S1.id JOIN staff_report.m_customer AS C1 ON M1.customer_id = C1.id JOIN staff_report.m_company AS C2 ON S1.company_id = C2.id WHERE S1.id = 1"
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            res.json(result);
        });
    });
}