// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const StaffList = require('./app/StaffList');

// bodyParserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定


// GET http://localhost:4000/api/v1
app.get('/v1/',(req, res) => {
    res.json({
        Massage:"Hello,world"
    });
});

//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);