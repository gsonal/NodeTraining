var request = require("request");
var fs = require("fs");

var s = request("http://www.google.com"); //return instance of Event Emitter

//https://www.npmjs.com/package/request - see available event handlers

//request module - returns response in form of stream - chunks of data chained
var response = "";
s.on("data", function(chunkOfData){
	//stream output (in bytes) has to be converted to string, thats why we are using appending to some string before writing the output to console or file.
	
	//console.log(">>>>>>>>>>>> Data >>>>>>>>>>>>>\n\n\n"+ chunkOfData);
	response += chunkOfData;
	//fs.writeFile("MyResponse.html", response); //overrides response everytime 
});

s.on("end", function(){
	fs.writeFile("MyResponse.html", response); //written in one shot
	console.log(">>> Done >>>");
});