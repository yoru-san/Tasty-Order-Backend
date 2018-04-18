var Waiter = require('../models/waiter').Waiter;

exports.index = (req, res) => {
    Waiter.find().then(data => {
        res.json(data);
    })
}