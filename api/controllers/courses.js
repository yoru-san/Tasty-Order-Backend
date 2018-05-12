var Course = require('../models/course').Course;

exports.index = (req, res) => {
    Course.find(req.query).then((data) => {
        data.forEach(element => {
            res.json(data);
        });
    });
}

exports.update = (req, res) => {
    Course.findOneAndUpdate({_id: req.body._id}, { $set: { disponibility: req.body.disponibility } }, {new: true}).then(data => {
        res.json(data);
    });
}