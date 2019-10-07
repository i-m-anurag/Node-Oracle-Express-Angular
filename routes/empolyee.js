
const config = require('../config/config');

function get (req, res)  {

    config.query("SELECT * FROM employee", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });

};

module.exports.get = get;