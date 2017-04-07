
var maxTime = 1000;

var evenDoubler = function (number, callback) {
	
	var waitTime = Math.floor(Math.random() * (maxTime + 1));
	
	if(number%2) {
		setTimeout(function(){
			callback(new Error('Odd Input!'), "" , waitTime);
		}, waitTime);
	} else {
		setTimeout(function(){
			callback(null, number*2, waitTime);
		}, waitTime);
	}
}

var processResult = function (err, results, time) {
	if(err) {
		console.log("Error: " + err.message + " at time: " + time);
	} else {
		console.log("Result: " + results + " at time: " + time);
	}
}

evenDoubler(2, processResult);
evenDoubler(3, processResult);
evenDoubler(4, processResult);

console.log("Program ended");