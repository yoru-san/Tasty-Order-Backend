var Order = require('../models/order').Order;

exports.index = (req, res) => {
    Order.find(req.query).then((data) => {
        res.json(data);
    });    
}

exports.create = (req, res) => {
    var order = new Order;
    order.tableNumber = req.body.tableNumber;
    order.prepared = false;
    order.items = req.body.items;
    
    order.save().then(data => {
        res.json(data);
    });
}

exports.patch = (req, res) => {
    let modifications = {};
    if (req.body.prepared != undefined)
        modifications.prepared = req.body.prepared;
    
    if (req.body.items != undefined)
        modifications.items = req.body.items;

    Order.findOneAndUpdate({_id: req.params.id}, modifications, {new: true} ).then(data => {
        res.json(data);
    })
}
