var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
	//response.send("Route working !!!");

	// usually we will want to send the Jade file instead of a msg
	//response.render("layout"); //no need for relative path as render method tries to look for this file name in folder mapped to "views" app property
	//in case there was subfolder under views folder, a relative path could be reqd
	
	// Now we want to show file with all dynamic content, which is index.jade, and that already contains layout.jade
	response.render("index", {
		data: "Jade Using Blocks !",
		msg: "This is displayed using Dynamic Data",
		users: [
			{name: 'John'},
			{name:'Mary'},
			{name:'Anthony'}]
	});
});

//define any number of router.route endpoints as needed

module.exports = router; 
//this module.exports is private object for this module, and I am exporting single module,
//so I need not specify module.exports.router = router 