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
        try {
            var err = () => {throw err}
            console.log('Connected!');
          } catch (err) {
            console.log('err')
          }

        const sql = "SELECT I1.id, M1.name, S1.name staff_name, C1.customer_abbreviation, C2.company_abbreviation, O1.name occupation_name, I1.position, I1.interview_times, I1.interview_location, date_format(I1.interview_date, '%Y/%m/%d') interview_date, date_format(I1.entrance_date, '%Y/%m/%d') entrance_date, I1.note, date_format(I1.entry_at, '%Y/%m/%d') entry_at, date_format(I1.update_at, '%Y/%m/%d') update_at, S2.name update_by FROM t_inquiry I1 JOIN m_matter M1 ON I1.matter_id = M1.id JOIN m_staff S1 ON I1.staff_id = S1.id JOIN m_staff S2 ON I1.update_by = S2.id JOIN m_customer C1 ON M1.customer_id = C1.id JOIN m_company C2 ON S1.company_id = C2.id JOIN m_occupation O1 ON I1.occupation_id = O1.id WHERE S1.id = " + req;
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