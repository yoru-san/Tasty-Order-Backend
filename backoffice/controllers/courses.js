var Order = require('../../api/models/order').Order;
var Waiter = require('../../api/models/waiter').Waiter;
var Course = require('../../api/models/course').Course;



exports.index = (req, res) => {
	Course.find({ $or: [ {type: "Starter"}, {type: "Dish"}, {type: "Dessert"}, {type: "Drink"} ]}).then(data => {
		let starters = data.filter(x => x.type == "Starter");
		let dishes = data.filter(x => x.type == "Dish");
		let desserts = data.filter(x => x.type == "Dessert");
		let drinks = data.filter(x => x.type == "Drink");
		
		res.render("plats", {allStarters: starters, allDishes: dishes, allDesserts: desserts, allDrinks: drinks});
	});
}

exports.action = (req, res) => {
    
}
