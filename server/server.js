const express =require('express');
const app = express();
const bodyParser = require('body-parser');
// const login = require('./modules/login');
// const menu = require('./modules/menu');
// const stafflist001 = require('./modules/stafflist001');
const stafflist002 = require('./modules/stafflist002.jsx');
// const stafflist003 = require('./modules/stafflist003');
// const stafflist004 = require('./modules/stafflist004');
// const stafflist005 = require('./modules/stafflist005');
// const staffsearch = require('./modules/staffsearch');
// const staffadd = require('./modules/staffadd');
// const caselist =require('./modules/caselist');
// const casedetail = require('./modules/casedetail');
// const casesearch = require('./modules/casesearch');
// const caseadd = require('./modules/caseadd');
// const referencelist = require('./modules/referencelist');
// const billing = require('./modules/billing');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

// app.get('/api/login',(req,res) => {
//     login.getData(req,res);
// });
app.get('/api/stafflist002',(req,res) => {
    stafflist002.getData(req,res);
});

app.listen(port);
console.log('Server listen on port:' + port);