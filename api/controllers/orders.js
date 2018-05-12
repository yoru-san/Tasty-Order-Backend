var Order = require('../models/order').Order;

exports.index = (req, res) => {
    Order.find(req.query).then((data) => {
        res.json(data);
    });
}

exports.create = (req, res) => {
    var order = new Order();
    console.log(req.body);
    order.waiter = req.body.waiter;
    order.tableNumber = req.body.tableNumber;
    order.totalPrice = req.body.totalPrice;    
    order.prepared = false;
    order.items = req.body.items;

    console.log(order);
    
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

exports.update = (req, res) => {
    Order.findOneAndUpdate({_id: req.body._id}, { $set: { prepared: req.body.prepared } }, {new: true}).then(data => {
        res.json(data);
    })
}
