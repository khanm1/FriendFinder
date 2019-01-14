var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var data = require("./app/data/friends.js");


require("./app/routing/apiRoutes")(app, data);
require("./app/routing/htmlRoutes")(app, path);



app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})
