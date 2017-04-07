//Buffer is Temp memory location to store all contents of say, read file, write file.
// JS cannot directly interact with file system, so underlying libuv(c, c++ libraries) provide that facility

var buff = new Buffer("sample data for Buffer");

console.log(buff); //not human readable format // bytes
console.log(buff.toString());

console.log(buff.toString("UTF-8"));
console.log(buff.toString("base64")); //hex, base64, ascii etc 

// when passing numeric data to a buffer, we are deciding the size of the buffer
// otherwise the size of the string or data decides the buffer size
console.log(buff.length);

var buffOne = new Buffer(250); //length
var len = buffOne.write("hello !");
console.log("No. of bytes written: " + len);
console.log("Total size: " + buffOne.length);

//append the buffer
var buffer1 = new Buffer("This is first line of string.");
var buffer2 = new Buffer("This is second line of string.");
var buffer3 = Buffer.concat([buffer1, buffer2]); // buffer3 size will be decided on basis of buffer1 and buffer2
console.log(buffer3.toString());

//fs and some other default modules, by default uses Buffer internally