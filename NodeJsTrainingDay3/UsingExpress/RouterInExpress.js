var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var router = express.Router();


//Recd using http://localhost:4000/data/products - routers are used to define endpoints
//For parameters define after "/:xx?" - question mark tells reader that it is optional parameter. 
//By default all parameters are optional
router.route("/products/:name?/:price?").get(function(request, response) {
	var products = [
		{Name: "Laptop", Price: 30000},
		{Name: "Mobile", Price: 10000}
	];
	
	var nameVal = request.params.name;
	var priceVal = request.params.price;
	console.log("name: " + nameVal + ", price: " + priceVal);
	//http://localhost:4000/data/products/p/w
	// name: p, price: w
	
	if(nameVal) {
		response.json(products[0]); //use nameVal to match from array...TODO
	} else {
		response.json(products);
	}
});

//IMP: '/' - forward slash is by default always GET request...we will see POST later

//Recd http://localhost:4000/data --> Cannot GET /data
app.use("/data", router); //here we are telling, if requested url matches /data, kindly look up things in router - can compare it with context root maybe in servlet
//app.use("/books", router2); - Yu=ou can use same of diff router to define more endpoints

//telling the appln that we wish to use body parser
app.use(bodyParser.urlencoded(
		{extended:true}
));


app.get("/", function(request, response) {
	//response.send("Use the Routes to get the data.");
	response.setHeader("Allow-Control-Cross-Origin", "*"); // In case of CORS error, set for every request - get/post, else use cors node module
	response.sendFile("login.html", {root: __dirname});
});

app.post("/login", function(request, response) {
	//we need body parser to parse request POST body
	var usrName = request.body.uname;
	var passwd = request.body.pwd;
	console.log("The username is: " + usrName + " and password is: " + passwd);
	
	// In case of CORS error, set for every request - get/post, else use cors node module - https://www.npmjs.com/package/cors
	//response.setHeader("Allow-Control-Cross-Origin", "*");
	
	if(usrName === "sonal" && passwd === "welcome") {
		response.send("success");
	} else {
		response.sendStatus(503);
		//.send("Incorrect credentials!!");
		//response.send("Incorrect credentials!!", 400); 	//deprecated
	}
});

app.listen(4000, function() {
	console.log("Server running @ 4000 !");
});
