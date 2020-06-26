const express =require('express');
const app = express();
const bodyParser = require('body-parser');
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 4000;
<<<<<<< HEAD
app.get('/api/login',(req,res) => {
    login.getData(req,res);
=======

app.get('/api/login/:condition',(req,res) => {
    login.getData(req.params.condition,res);
>>>>>>> 332173f7dfdee99a7fdf2417ab0eb12988b71ea3
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
app.listen(port);
console.log('Server listen on port:' + port);





