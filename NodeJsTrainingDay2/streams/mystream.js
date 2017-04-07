/**
 * http://usejsdoc.org/
 */

var fs = require("fs");

var readableStream = fs.createReadStream("Data.txt"); //default encoding is bytes
var writableStream = fs.createWriteStream("Output.txt"); //cannot read and write on same file - as file streams are not duplex

readableStream.setEncoding("UTF-8");
var allData = "";

//Below we are handling all activities by ourselves
/*readableStream.on("data", function(chunk) {
	allData += chunk;
});

readableStream.on("end", function(chunk) {
	writableStream.write(allData); //again allData is written in one shot
	writableStream.end();
});*/


//But we dont want to write all data in one shot, rather write in append mode
//Pipe will handle all activities internally
readableStream.pipe(writableStream); 
//read from readableStream and write it to writableStream, clear buffer and read again...

//CQ: Do we need to close streams?
//CQ: How does pipe handle errors?
//readableStream.pipe(writableStream).on("error") {//close writable streams};

//One important caveat is that if the Readable stream emits an error during processing, the Writable destination is not closed automatically. 
//If an error occurs, it will be necessary to manually close each stream in order to prevent memory leaks.
//Call end method explicitly on writable streams