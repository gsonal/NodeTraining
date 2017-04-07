var os = require('os'); //don't give relative path as it is default available module

var toMB = function(totalBytes) {
	return Math.round((totalBytes / 1024 / 1024) * 100) / 100;
}

console.log("Total memory in RAM: "+ toMB(os.totalmem()));
