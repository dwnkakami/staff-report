const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const login = require('./modules/login.js');
const menu = require('./modules/menu.js');
const stafflist001 = require('./modules/stafflist001.js');
const stafflist002 = require('./modules/stafflist002.js');
const stafflist003 = require('./modules/stafflist003.js');
const stafflist004 = require('./modules/stafflist004.js');
const stafflist005 = require('./modules/stafflist005.js');
const staffsearch = require('./modules/staffsearch.js');
const staffadd = require('./modules/staffadd.js');
const caselist = require('./modules/caselist.js');
const casedetail = require('./modules/casedetail.js');
const casesearch = require('./modules/casesearch.js');
const caseadd = require('./modules/caseadd.js');
const referencelist = require('./modules/referencelist.js');
const billing = require('./modules/billing.js');

const casesearch001 = require('./modules/casesearch001.js');
const casesearch002 = require('./modules/casesearch002.js');
const casesearch003 = require('./modules/casesearch003.js');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.get('/api/login/:condition',(req,res) => {
    login.getData(req.params.condition,res);
});
app.get('/api/menu/:condition',(req,res) => {
    menu.getData(req.params.condition,res);
});
app.get('/api/stafflist001/:condition',(req,res) => {
    stafflist001.getData(req.params.condition,res);
});
app.get('/api/stafflist002/:condition',(req,res) => {
    stafflist002.getData(req.params.condition,res);
});
app.get('/api/stafflist003/:condition',(req,res) => {
    stafflist003.getData(req.params.condition,res);
});
app.get('/api/stafflist004/:condition',(req,res) => {
    stafflist004.getData(req.params.condition,res);
});
app.get('/api/stafflist005/:condition',(req,res) => {
    stafflist005.getData(req.params.condition,res);
});
app.get('/api/staffsearch/:condition',(req,res) => {
    staffsearch.getData(req.params.condition,res);
});
app.get('/api/staffadd/:condition',(req,res) => {
    staffadd.getData(req.params.condition,res);
});
app.get('/api/caselist/:condition',(req,res) => {
    caselist.getData(req.params.condition,res);
});
app.get('/api/casedetail/:condition',(req,res) => {
    casedetail.getData(req.params.condition,res);
});
app.get('/api/casesearch/:condition',(req,res) => {
    casesearch.getData(req.params.condition,res);
});
app.get('/api/caseadd/:condition',(req,res) => {
    caseadd.getData(req.params.condition,res);
});
app.get('/api/referencelist/:condition',(req,res) => {
    referencelist.getData(req.params.condition,res);
});
app.get('/api/billing/:condition',(req,res) => {
    billing.getData(req.params.condition,res);
});
app.get('/api/casesearch001/:condition',(req,res) => {
    casesearch001.getData(req.params.condition,res);
});
app.get('/api/casesearch002/:condition',(req,res) => {
    casesearch002.getData(req.params.condition,res);
});
app.get('/api/casesearch003/:condition',(req,res) => {
    casesearch003.getData(req.params.condition,res);
});


app.listen(port);
console.log('Server listen on port:' + port);