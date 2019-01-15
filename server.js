// configure our dependencies
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

// setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var data = require("./app/data/friends.js");

require("./app/routing/apiRoutes")(app, data);
require("./app/routing/htmlRoutes")(app, path);

// starting the server 
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})
