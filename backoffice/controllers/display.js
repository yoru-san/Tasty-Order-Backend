var Order = require('../../api/models/order').Order;

// exports.index = (req, res) => {
//     Order.find().populate('waiter').populate('items').sort({ _id: -1 }).limit(1).then(data => {
//         res.render('affichage', { preparedOrders: data });
//     });
// }

exports.index = (req, res) => {
    Order.find({ prepared: true }).populate('waiter').populate('items').then(data => {
        res.render('affichage', { preparedOrders: data });
    })
}