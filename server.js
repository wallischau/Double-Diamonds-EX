// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var bodyParser   = require('body-parser');


var app      = express();
var PORT     = process.env.PORT || 8080;
// var passport = require('passport');
// var flash    = require('connect-flash');

var db = require("./app/models/orm");
var morgan       = require('morgan');
// var cookieParser = require('cookie-parser');

// var session      = require('express-session');
var path = require('path');

// configuration ===============================================================
// require('./app/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.set('views', __dirname + '\\views');
// app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static("public"));
// routes ======================================================================
// require('./app/route/login-routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/route/api-routes.js')(app)
require('./app/route/html-routes.js')(app)
// require('../app/route/api-routes.js')(app)
// launch ======================================================================
// app.listen(port);
// console.log('The magic happens on port ' + port);

  app.listen(PORT, function() {
    console.log('App listening on PORT' + PORT);
  });
