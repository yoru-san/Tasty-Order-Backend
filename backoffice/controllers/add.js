var Order = require('../models/order').Order;
var Waiter = require('../models/waiter').Waiter;
var Course = require('../models/course').Course;

exports.index = (req, res) => {
    res.render('addTask');
}

exports.action = (req, res) => {
    var recipe = new Recipe;
    recipe.title = req.body.title;
    recipe.details = req.body.details;

    recipe.save().then(data => {
        res.redirect("/");
    });
}