var express = require("express");

var app = express();

app.get("/", function(request, response) {

	var products = [
		{Name: "Laptop", Price: 30000},
		{Name: "Mobile", Price: 10000}
	];
	//response.send("<h3>Welcome to Express !!!</h3>");
	
	//response.sendFile("Client.html", {root: __dirname});
	
	response.json(products);
});

app.listen(4000, function() {
	console.log("Server running @ 4000 !");
});
