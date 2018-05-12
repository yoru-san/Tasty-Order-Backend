var courses_controller = require('./controllers/courses');
var orders_controller = require('./controllers/orders');
var waiters_controller = require('./controllers/waiters');

exports.init = (app) => {
    app.get('/api/waiters', (req, res) => {
        waiters_controller.index(req, res);
    });

    app.get('/api/courses', (req, res) => {
        courses_controller.index(req, res);
    });

    app.patch('/api/courses', (req, res) => {
        courses_controller.update(req, res);
    });

    app.get('/api/orders', (req, res) => {
        orders_controller.index(req, res);
    });

    app.post('/api/orders', (req, res) => {
        orders_controller.create(req, res);
    });

    app.patch('/api/orders', (req, res) => {
        orders_controller.update(req, res);
    });

}