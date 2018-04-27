var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./route.js');

mongoose.connect('mongodb://localhost/tasty-order');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/public'));
app.set('views', (__dirname, '/backoffice/views'));

routes.init(app);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});
