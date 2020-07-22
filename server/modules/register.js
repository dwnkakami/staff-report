// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.postData = (req, res) => {
    const mysql = require('mysql');
    // let req = {
    //     // 'id': req.body.id,
    //     // 'name': req.body.name,
    //     // 'role_id': req.body.role_id,
    //     // 'password': req.body.password
    // }

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staff_report',
    });
    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        const sql = "insert into m_user values(?, ?, ? ,?)"
        console.log(req.body);
        con.query(sql,[req.body.id, req.body.name, req.body.role_id, req.body.password], (err, result, fields) => {
            if (err) throw err;
            
            res.send('Register Success!!');
        });
    });
}