//In practice, we may not have all data in single Js file, we can move them across folders,
//and use across files using module.exports

var express = require("express");
var routes = require("./routes/index");
var path = require("path");

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade"); // refer to express docs for such default variables 'view engine' etc.

app.use("/", routes);

app.get("/", function(request, response) {
	
});

app.listen(4000, function() {
	console.log("Server running @ 4000 !");
});
