//For new V8 instances, use fork
var childProcess = require("child_process");
var workerProcess;

for(var i=0; i<3; i++) {
	workerProcess = childProcess.fork('myModule2', [i]);
}
