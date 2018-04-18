var Course = require('../models/course').Course;

exports.index = (req, res) => {
    Course.find(req.query).then((data) => {
        res.json(data);
    });
}

exports.patch = (req, res) => {}