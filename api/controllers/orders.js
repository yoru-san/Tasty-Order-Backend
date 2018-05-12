var Order = require('../models/order').Order;

exports.index = (req, res) => {
    Order.find(req.query).then((data) => {
        res.json(data);
    });
}

//Création d'une nouvelle commande
exports.create = (req, res) => {
    var order = new Order();
    console.log(req.body);
    order.waiter = req.body.waiter;
    order.tableNumber = req.body.tableNumber;
    order.totalPrice = req.body.totalPrice;    
    order.prepared = false;
    order.items = req.body.items;
    
    order.save().then(data => {
        res.json(data);
    });
}

//Changement du statut de préparation de la commande
exports.update = (req, res) => {
    Order.findOneAndUpdate({_id: req.body._id}, { $set: { prepared: req.body.prepared } }, {new: true}).then(data => {
        res.json(data);
    });
}
