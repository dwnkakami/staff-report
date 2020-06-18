var  express=require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
var mysql=require('mysql');


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers 
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.header('Content-Type', 'application/json; charset=UTF-8');
    next();
  });


var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '12345678',
    database : 'staff_report',
    port:'3306'
});


app.post('/login',function (req,res) {
    var data = JSON.stringify(req.body);
    console.log(data);
    var name = req.body.name;
    console.log(name);
    var password = req.body.password;
 
    var selectSQL = "select * from m_user where name = '"+name+"'";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw  err;
        console.log(rs);
        if (rs.length > 0) {
            console.log('OK');
            res.send({code: 0});
        } else {
            console.log('no user or password is not right');
            res.send({code: -1});
        }
    })
})

app.get('/attract/investment/financing_amount/list', function (req, res) {
    console.log(req.query);
    res.send({code: 0});
})
 
var  server=app.listen(8686,function () {
    console.log("start port 8686");
})