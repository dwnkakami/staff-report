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
        database: 'staff_report'
    });
    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        const sql = "SELECT M1.name ,S1.name staff_name ,C1.customer_abbreviation ,I1.note ,C2.company_abbreviation FROM t_inquiry I1 JOIN m_matter M1 ON I1.matter_id = M1.id JOIN m_staff S1 ON I1.staff_id = S1.id JOIN m_customer C1 ON M1.customer_id = C1.id JOIN m_company C2 ON S1.company_id = C2.id WHERE S1.id =" + req;
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            res.json(result);
        });
    });
}