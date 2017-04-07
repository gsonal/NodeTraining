var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser"); // github says that cookie-parser is no longer necessary to work with session

var app = express();

app.use(cookieParser()); //constructor of cookie-parser object is added and allowed for use by the app
//anything in session/cookie-parser objects will now be available to app also

//https://github.com/expressjs/session
app.use(session({
	secret:"Create a unique Id",
	saveUninitialized:true,
	resave:true
})); 

app.get("/", function(request, response) {
	response.send("This is a sessions and cookies management demo.");

	console.log("--------------------------------------------------------------------------");
	//console.log(request.cookies);
	if(request.session.SomeSessionData) {
		console.log(request.session.SomeSessionData);
	}
	var sessionData = request.session; 
	console.log(sessionData);
	sessionData.SomeSessionData = "Actual Value!"; //session store -- similar to session.setAttribute("some value");
	sessionData.save();
});

app.listen(4000, function() {
	console.log("Server running @ 4000 !");
});
