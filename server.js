var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//---------------------------------------------
var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// added for sequelize instead of orm
// Requiring our models for syncing
var db = require("./models");

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burgersController.js");
// app.use("/", routes);

// no router, directly use express?
require("./controllers/burgersController.js")(app);

//app.listen(port);
// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});