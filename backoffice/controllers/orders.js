var Order = require('../../api/models/order').Order;
var Course = require('../../api/models/course').Course;


exports.index = (req, res) => {
    Order.find().then(data => {
        res.render("commandes", {allOrders: data});
    })

}
exports.findItemById = (req, res) =>{
    Course.find().then(data => {
        
    })
}
exports.action = (req, res) => {
    
}