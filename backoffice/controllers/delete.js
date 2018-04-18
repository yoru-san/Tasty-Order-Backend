var Recipe = require('../models/recipe').Recipe;

exports.action = (req,res) => {
    Recipe.findOneAndRemove({_id: req.params.id}).then(data => {
        res.redirect("/");
    });
}