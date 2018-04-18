var Recipe = require('../models/recipe').Recipe;

exports.index = (req, res) => {
    Recipe.findOne({_id: req.params.id}).then(data => {
        res.render('updateTask',{task: data});
    });
}

exports.action = (req, res) => {
    Recipe.findOneAndUpdate({_id: req.params.id}, {title: req.body.title, details: req.body.details}).then(data => {
        res.redirect('/');
    });
}

