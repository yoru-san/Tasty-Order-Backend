var courses_controllers = require('./controllers/courses');
var orders_controllers = require('./controllers/orders');

exports.init = (app) => {

app.get('/commandes', (req,res) => {
    orders_controllers.index(req, res);
});

app.post('/commandes', (req,res) => {
    orders_controllers.action(req, res);
});

app.get('/plats', (req,res) => {
    courses_controllers.index(req, res);
});

app.post('/plats', (req,res) => {
    courses_controllers.action(req, res);
});

}