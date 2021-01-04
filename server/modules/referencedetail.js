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
        try {
            var err = () => {throw err}
            
          } catch (err) {
            console.log('err')
          }

        const sql = "SELECT I1.id ,I1.position ,I1.interview_times ,I1.interview_location ,I1.interview_date ,I1.entrance_date ,I1.note ,I1.entry_at ,I1.update_at ,I1.update_by ,M1.name ,S1.name staff_name ,O1.name occupation_name FROM t_inquiry I1 JOIN m_matter M1 ON I1.matter_id = M1.id JOIN m_staff S1 ON I1.staff_id = S1.id JOIN m_occupation O1 ON I1.occupation_id = O1.id WHERE I1.id =" + req;
        con.query(sql, (err, result, fields) => {
            try {
                var err = () => {throw err}
                
              } catch (err) {
                console.log('err')
              }
            res.json(result);
        });
    });
}