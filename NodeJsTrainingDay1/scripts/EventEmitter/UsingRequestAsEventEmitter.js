var request = require("request");

var s = request("http://www.google.com"); //return instance of Event Emitter

//https://www.npmjs.com/package/request - see available event handlers

//request module - returns response in form of stream - chunks of data chained
s.on("data", function(chunkOfData){
	console.log(">>>>>>>>>>>> Data >>>>>>>>>>>>>\n\n\n"+ chunkOfData);
});
