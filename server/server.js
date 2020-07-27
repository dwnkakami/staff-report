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
const staffadd001 = require('./modules/staffadd001.js');
const staffadd002 = require('./modules/staffadd002.js');
const staffadd003 = require('./modules/staffadd003.js');
const staffadd004 = require('./modules/staffadd004.js');
const caselist = require('./modules/caselist.js');
const casedetail = require('./modules/casedetail.js');
const casesearch = require('./modules/casesearch.js');
const caseadd = require('./modules/caseadd.js');
const referencelist = require('./modules/referencelist.js');
const billing = require('./modules/billing.js');
const role = require('./modules/role.js');
const register = require('./modules/register.js');

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
app.post('/api/staffadd',(req,res) => {
    staffadd.postData(req,res);
});
app.get('/api/staffadd001',(req,res) => {
    staffadd001.getData(req,res);
});
app.get('/api/staffadd002',(req,res) => {
    staffadd002.getData(req,res);
});
app.get('/api/staffadd003',(req,res) => {
    staffadd003.getData(req,res);
});
app.get('/api/staffadd004',(req,res) => {
    staffadd004.getData(req,res);
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
app.post('/api/caseadd/',(req,res) => {
    caseadd.postData(req,res);
});
app.get('/api/referencelist/:condition',(req,res) => {
    referencelist.getData(req.params.condition,res);
});
app.get('/api/referencedetail/:condition',(req,res) => {
    referencedetail.getData(req.params.condition,res);
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
app.get('/api/role/:condition',(req,res) => {
    role.getData(req.params.condition,res);
});
app.post('/api/register',(req,res) => {
    register.postData(req,res);
});


app.listen(port);
console.log('Server listen on port:' + port);