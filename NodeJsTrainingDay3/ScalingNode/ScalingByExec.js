var exec = require("child_process").exec;
//exec will start/spawn a child process

//10000 lines of code


var timeConsumingCommand = "node -v";

//return a stream - either stdout or stderr
var child = exec(timeConsumingCommand, null, function(err, stdout, stderr) {
	if(err) {
		console.log("Error: " + err);
	} else {
		console.log("The result: " + stdout);
	}
});

exec("systeminfo", null, function(err, stdout, stderr) {
	if(err) {
		console.log("Error: " + err);
	} else {
		console.log("The result: " + stdout);
	}
});

