//source: https://nodejs.org/en/about/
//var - mutable ; const - immutable value
//Here HTTP is just used as a wrapper. Actual msg exchange - via sockets will happen over TCP

const http = require('http');
var fs = require("fs");
const socket = require("socket.io");


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  /*res.statusCode = 200;
  console.log("Within createServer: ")
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>\n');*/
  
	
  //Lets send an HTML page instead of hardcoded response - 
  //sendFile internally opens a readable stream...reads file, write to response and end...
  //__dirname ==> default object by node which gives current directory reference
  fs.readFile(__dirname + "/Client.html", function(err, data) {
	if(err) {
		console.log("Error");
	} else {
		 res.writeHead(200, {"Content-type" : "text/html"});
		 return res.end(data);
	}
  });
  // This code of fs can also be written using emitter steps
});


var io = socket.listen(server);
io.sockets.on("connection", function(sckt) {
	setInterval(function() {
		var dataToSend = new Date();
		sckt.emit("messageForClient", dataToSend);
	}, 2000);
	
	sckt.on("messageFromClient", function(dataFromClient){
		console.log(`Data from client: ${dataFromClient}`);
	});
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});