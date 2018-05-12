var Order = require('../../api/models/order').Order;

//Récupération de toutes les commandes non prêtes
exports.index = (req, res) => {
    Order.find( { prepared: false } ).populate('items').then(data => {
        res.render("commandes", {allOrders: data});
    });
}
