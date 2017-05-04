var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');

//express setup
var app = express();

//sets up express to serve static files
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgerController.js');
app.use('/', routes);

var port = 3000;

app.listen(process.env.PORT || port);