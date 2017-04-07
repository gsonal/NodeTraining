//For spawning diff process and return the output
var childProcess = require("child_process");

var workerProcess;

for(var i=0; i<3; i++) {
	workerProcess = childProcess.spawn("node", ['myModule', i]);
	
	workerProcess.stdout.on("data", function(dataFromChildProcess) {
		console.log("Stdout: " + dataFromChildProcess);
	});
	
	workerProcess.on("close", function(code) {
		console.log("Worker process " + i + " exited with code: " + code); // prints 3 because it is executed at the end of all processing
	});
}

/*
//Output:
 D:\W_NodeTraining\NodeJsTrainingDay3\ScalingNode>node ScalingTechniques.js
Stdout: Child process Id: 17632

Stdout: Executed for Process : (i): 0

Worker process 3 exited with code: 0
Stdout: Child process Id: 8216

Stdout: Executed for Process : (i): 2

Worker process 3 exited with code: 0
Stdout: Child process Id: 8300

Stdout: Executed for Process : (i): 1

Worker process 3 exited with code: 0

// We see in Task manager that spawned child processed gets automatically ended after program ends

*/
