//set up dependencie
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

// creates express server and sets up a port
var app = express();
var PORT = process.env.PORT || 3000;

// setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));

// this parse various different custom JSON types as JSN
app.use(bodyParser.json());

var data = require("./app/data/friends.js");

//Router
// this is exported as a function an passed in app
require("./app/routing/apiRoutes")(app, data);
require("./app/routing/htmlRoutes")(app, path);

// Starts the server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})
