var courses_controllers = require('./controllers/courses');
var orders_controllers = require('./controllers/orders');
var display_controllers = require('./controllers/display')

exports.init = (app) => {
    
    app.get('/commandes', (req,res) => {
        orders_controllers.index(req, res);
    });
    
    app.get('/plats', (req,res) => {
        courses_controllers.index(req, res);
    });

    app.get('/affichage', (req,res) => {
        display_controllers.index(req, res);
    });
    
}