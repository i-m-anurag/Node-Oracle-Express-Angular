const express = require('express');
//const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

const employee = require('./routes/empolyee');
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    next();
});
 

router.get('/employee',employee.get);

router.post('/employee',employee.post);
app.use('/api', router)

app.listen(port,()=>{
    console.log(`Server is started ${port}`);
});