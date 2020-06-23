const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const http       = require('http');
const server_    = http.createServer();
const fileserver = require('fs');

/*
const login = require('./modules/login.jsx');
const menu = require('./modules/menu.jsx');
const stafflist001 = require('./modules/stafflist001.jsx');
const stafflist002 = require('./modules/stafflist002.jsx');
const stafflist003 = require('./modules/stafflist003.jsx');
const stafflist004 = require('./modules/stafflist004.jsx');
const stafflist005 = require('./modules/stafflist005.jsx');
const staffsearch = require('./modules/staffsearch.jsx');
const staffadd = require('./modules/staffadd.jsx');
const caselist = require('./modules/caselist.jsx');
const casedetail = require('./modules/casedetail.jsx');
const casesearch = require('./modules/casesearch.jsx');
const caseadd = require('./modules/caseadd.jsx');
const referencelist = require('./modules/referencelist.jsx');
const billing = require('./modules/billing.jsx');
*/



const port = process.env.PORT || 4000;

/*
app.get('/api/login',(req,res) => {
    login.getData(req,res);
});
app.get('/api/menu',(req,res) => {
    menu.getData(req,res);
});
app.get('/api/stafflist001',(req,res) => {
    stafflist001.getData(req,res);
});
app.get('/api/stafflist002',(req,res) => {
    stafflist002.getData(req,res);
});
app.get('/api/stafflist003',(req,res) => {
    stafflist003.getData(req,res);
});
app.get('/api/stafflist004',(req,res) => {
    stafflist004.getData(req,res);
});
app.get('/api/stafflist005',(req,res) => {
    stafflist005.getData(req,res);
});
app.get('/api/staffsearch',(req,res) => {
    staffsearch.getData(req,res);
});
app.get('/api/staffadd',(req,res) => {
    staffadd.getData(req,res);
});
app.get('/api/caselist',(req,res) => {
    caselist.getData(req,res);
});
app.get('/api/casedetail',(req,res) => {
    casedetail.getData(req,res);
});
app.get('/api/casesearch',(req,res) => {
    casesearch.getData(req,res);
});
app.get('/api/caseadd',(req,res) => {
    caseadd.getData(req,res);
});
app.get('/api/referencelist',(req,res) => {
    referencelist.getData(req,res);
});
app.get('/api/billing',(req,res) => {
    billing.getData(req,res);
});*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port,function(req,res)
{
    
});

server_.on('request',functest);

    function functest(req,res)
    {
        fileserver.readFile('../public/index.html','UTF-8',html_open);

        function html_open(err,data)
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    }
console.log('Server listen on port:' + port);