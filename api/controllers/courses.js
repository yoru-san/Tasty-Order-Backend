var Course = require('../models/course').Course;

exports.index = (req, res) => {
    Course.find(req.query).then((data) => {
        res.json(data);
    });
}

exports.patch = (req, res) => {
    Course.findOneAndUpdate({_id: req.params.id}, {disponibility: req.body.disponibility}, {new: true}).then(data => {
        res.json(data);
    })
}