const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "sakila"
});
con.connect(function (err) {
    if (err) throw err;
});
module.exports = con;