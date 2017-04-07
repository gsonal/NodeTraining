/**
 * http://usejsdoc.org/
 */
var nettcp = require("net"); //default module for using TCP protocol
//other duplex streams - crypto, zlip

var fs = require("fs");
var writableLog = fs.createWriteStream("Logs.txt");

var server = nettcp.createServer(function(connect) {
	//connect is an event emitter here
	console.log("Connection Established !!!");
	
	connect.on("end", function() {
		console.log("Connection terminated !!!");
	});
	
	connect.write("Some default message here...");
	
	//Pipes can be chained too, so we are sending output to connect as well as file
	//connect.pipe(connect).pipe(writableLog);
	
	/*writableLog.on("end", function() {
		console.log("Writable stream end invoked by Pipe.")
	});*/
	
	connect.on("data", function(chunk) {
		if(chunk.toString().startsWith("\r\n")) {
			connect.pipe(connect).pipe(writableLog);
		}
	});
	
});

server.listen(6565, function() {
	console.log("Server listening at 6565 !!!");
});

