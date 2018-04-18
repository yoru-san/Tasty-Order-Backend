var Order = require('../models/order').Order;
var Waiter = require('../models/waiter').Waiter;
var Course = require('../models/course').Course;

exports.listOrders = (req, res) => {
    Order.find().then(data => {
        res.render("commandes", {allOrders: data});
    })
}

exports.listWaiters = (req, res) => {
    Waiter.find().then(data => {
        res.render("login", {allWaiters: data});
    })
}
	
exports.listCourses = (req, res) => {
	Course.find({ $or: [ {type: "Starter"}, {type: "Dish"}, {type: "Dessert"}, {type: "Drink"} ]}).then(data => {
		let starters = data.filter(x => x.type == "Starter");
		let dishes = data.filter(x => x.type == "Dish");
		let desserts = data.filter(x => x.type == "Dessert");
		let drinks = data.filter(x => x.type == "Drink");
		
		res.render("plats", {allStarters: starters, allDishes: dishes, allDesserts: desserts, allDrinks: drinks});
	});
}
