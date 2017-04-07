
//reading file using Event Emitter
var EventEmitter = require("events").EventEmitter;

var getResource = function(maxIteration) {
	console.log("Inside get resource!!");
	
	var e = new EventEmitter();
	//events emitted here
	//Used to emit event at later point - after all subscribing events are registered
	process.nextTick(function() {
		var ctr = 0;
		e.emit("start"); //Due to the delay, I can be sure that 'start' will be registered
		
		var t = setInterval(function() {
			//for(ctr; ctr < maxIteration; ctr++) {
			e.emit("data", ++ctr); //emit data
			
			if(ctr === 8) {
				e.emit("error", ctr);
				clearInterval(t);
			}
			//}
			if(ctr == maxIteration) {
				e.emit("end", ctr);
				clearInterval(t);
			}
		}, 1000);
		
		/*for(ctr; ctr < maxIteration; ctr++) {
			if(ctr === 8) {
				e.emit("error", ctr);
			} else {
				e.emit("data", ctr); //emit data	
			}
		}
		if(ctr == maxIteration) {
			e.emit("end", ctr); //for loop is causing it not to break loop, thats why 9 & 10 are still printed.
		}*/
		
		/*var t = setInterval(function(){
			for(ctr; ctr < maxIteration; ctr++) {
				e.emit("data", ctr); //emit data
			}

			if(ctr == maxIteration) {
				e.emit("end", ctr);
				clearInterval(t);
			}
		}, 1000); //time is in miliseconds - every sec we want it to emit event --- did not work as expected
		*/
	});
	
	return e;
}

//We saw that setTimeout goes and sits in task queue and gets executed at later point after the stack is empty, after fully executing the program
//Node gives us a way to delay the processing without using setTimeout method. 
//process.nextTick - execute the process (node.exe) in next cpu cycle - think of it as loading JS script on load pf page before u click the button to test your onclick method logic, in a web appln.

//Subscriber/Client  - not browser - can be residing in diff file
var res = getResource(10); //return an object of Event Emitter!

res.on("start", function () {
	console.log("Started..");
});

res.on("data", function (d) {
	console.log("I received count : " + d);
});

res.on("end", function (d) {
	console.log("I am done with count: " + d);
});

res.on("error", function (d) {
	console.log("I received error : " + d);
});