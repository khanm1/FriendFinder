//set up dependencie
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

// creates express server and sets up a port
var app = express();
var PORT = process.env.PORT || 3000;

 //Parse request body as JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var data = require("./app/data/friends.js");

//Router
// The below points our server to a series of "route" files.
require("./app/routing/apiRoutes")(app, data);
require("./app/routing/htmlRoutes")(app, path);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})
