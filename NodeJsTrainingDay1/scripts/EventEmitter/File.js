var fs = require('fs');

//reading file using callback approach
fs.readFile('Data.txt', function(err, dataFromTheFile){
	if(err) {
		console.log("Error occurred: " + err);
	} else {
		console.log("Reading (Async) result: " + dataFromTheFile);
	}
});
console.log("End of File.js class!");

