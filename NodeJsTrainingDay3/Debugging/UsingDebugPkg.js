//node --debug <name of file>

var http = require("http");

const hostname = '127.0.0.1';
var port = process.env.port || 1337;

http.createServer((req, res) => {
	resp.writeHead(200, {'Content-Type': 'text/plain'});
	resp.end("Hello World \n");
}).listen(port, hostname);