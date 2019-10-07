const express = require('express');
//const mysql = require('mysql');
const app = express();

const router = express.Router();

const employee = require('./routes/empolyee');
const port = 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 

router.get('/employee',employee.get);
app.use('/api', router)

app.listen(port,()=>{
    console.log(`Server is started ${port}`);
});