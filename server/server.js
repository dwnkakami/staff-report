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
const staffsearch001 = require('./modules/staffsearch001.js');
const staffsearch002 = require('./modules/staffsearch002.js');
const staffsearch003 = require('./modules/staffsearch003.js');
const staffsearch004 = require('./modules/staffsearch004.js');
const staffsearch005 = require('./modules/staffsearch005.js');
const staffsearch006 = require('./modules/staffsearch006.js');
const staffsearch007 = require('./modules/staffsearch007.js');
const staffadd = require('./modules/staffadd.js');
const staffadd001 = require('./modules/staffadd001.js');
const staffadd002 = require('./modules/staffadd002.js');
const staffadd003 = require('./modules/staffadd003.js');
const staffadd004 = require('./modules/staffadd004.js');
const staffadd005 = require('./modules/staffadd005.js');
const staffadd006 = require('./modules/staffadd006.js');
const caselist = require('./modules/caselist.js');
const casedetail = require('./modules/casedetail.js');
const casesearch = require('./modules/casesearch.js');
const casesearch001 = require('./modules/casesearch001.js');
const casesearch002 = require('./modules/casesearch002.js');
const casesearch003 = require('./modules/casesearch003.js');
const caseadd = require('./modules/caseadd.js');
const caseadd001 = require('./modules/caseadd001.js');
const caseadd002 = require('./modules/caseadd002.js');
const caseadd003 = require('./modules/caseadd003.js');
const caseadd004 = require('./modules/caseadd004.js');
const referencelist = require('./modules/referencelist.js');
const referencedetail = require('./modules/referencedetail.js');
const referenceadd = require('./modules/referenceadd.js');
const referenceupdate = require('./modules/referenceupdate.js');
const billing = require('./modules/billing.js');
const role = require('./modules/role.js');
const register = require('./modules/register.js');

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
app.post('/api/staffsearch',(req,res) => {
    staffsearch.postData(req,res);
});
app.post('/api/staffsearch001',(req,res) => {
    staffsearch001.postData(req,res);
});
app.post('/api/staffsearch002',(req,res) => {
    staffsearch002.postData(req,res);
});
app.post('/api/staffsearch003',(req,res) => {
    staffsearch003.postData(req,res);
});
app.post('/api/staffsearch004',(req,res) => {
    staffsearch004.postData(req,res);
});
app.post('/api/staffsearch005',(req,res) => {
    staffsearch005.postData(req,res);
});
app.post('/api/staffsearch006',(req,res) => {
    staffsearch006.postData(req,res);
});
app.post('/api/staffsearch007',(req,res) => {
    staffsearch007.postData(req,res);
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
app.get('/api/staffadd005',(req,res) => {
    staffadd005.getData(req,res);
});
app.get('/api/staffadd006/:condition',(req,res) => {
    staffadd006.getData(req.params.condition,res);
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
app.get('/api/casesearch001/:condition',(req,res) => {
    casesearch001.getData(req.params.condition,res);
});
app.get('/api/casesearch002/:condition',(req,res) => {
    casesearch002.getData(req.params.condition,res);
});
app.get('/api/casesearch003/:condition',(req,res) => {
    casesearch003.getData(req.params.condition,res);
});
app.post('/api/caseadd/',(req,res) => {
    caseadd.postData(req,res);
});
app.get('/api/caseadd001',(req,res) => {
    caseadd001.getData(req,res);
});
app.get('/api/caseadd002',(req,res) => {
    caseadd002.getData(req,res);
});
app.get('/api/caseadd003',(req,res) => {
    caseadd003.getData(req,res);
});
app.get('/api/caseadd004',(req,res) => {
    caseadd004.getData(req,res);
});
app.get('/api/referencelist/:condition',(req,res) => {
    referencelist.getData(req.params.condition,res);
});
app.get('/api/referencedetail/:condition',(req,res) => {
    referencedetail.getData(req.params.condition,res);
});
app.post('/api/referenceadd/',(req,res) => {
    referenceadd.postData(req,res);
});
app.post('/api/referenceupdate/',(req,res) => {
    referenceupdate.postData(req,res);
});
app.get('/api/billing/:condition',(req,res) => {
    billing.getData(req.params.condition,res);
});
app.get('/api/role/:condition',(req,res) => {
    role.getData(req.params.condition,res);
});
app.post('/api/register',(req,res) => {
    register.postData(req,res);
});


app.listen(port);
console.log('Server listen on port:' + port);
