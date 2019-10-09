
const config = require('../config/config');

function get (req, res)  {
   // console.log(req.body.id);
    
    config.query('SELECT * FROM payment' , function (err, result, fields) {
        if (err) throw err;
       // console.log(result);
        res.json(result);
    });

};



function post(req, res) {
    // console.log(req.body.id);

    config.query('SELECT * FROM payment ' + req.body.q, function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        res.json(result);
    });

};

module.exports.get = get;
module.exports.post = post;