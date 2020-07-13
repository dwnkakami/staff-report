// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.postData = (req, res) => {
    const mysql = require('mysql');
    let value = {
        id: req.body.id,
        name: req.name.id,
        role_id: req.name.role_id
    }

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'staff_report',
    });
    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        const sql = "insert into m_user values(?, ?, ?)"
        con.query(sql,[value.id, value.name, value.role_id], (err, result, fields) => {
            if (err) throw err;
            res.send(value);
        });
    });
}