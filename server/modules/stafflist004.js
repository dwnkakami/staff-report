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
            
          } catch (err) {
            console.log('err')
          }

        const sql = "SELECT I1.staff_id, M1.name, date_format(MAX(M1.matter_end),'%Y/%m/%d') AS matter_end FROM m_matter M1 JOIN t_inquiry I1 ON M1.id = I1.matter_id WHERE I1.staff_id = " + req 
        con.query(sql,(err, result, fields) => {
            try {
                var err = () => {throw err}
                
              } catch (err) {
                console.log('err')
              }
            res.json(result);
        });
    });
}