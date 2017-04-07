
var fs = require("fs");

var dir_path = "D:/TempNode";

//For Async version, so many unnamed callback functions bring a christmas tree problem. 
//so better to use named callback functions.


fs.mkdir(dir_path, function(err) {
	if(err) {
		console.log("Error occurred: " + err);
	} else {
		fs.exists(dir_path, function(exists) {
			if(exists) {
				process.chdir(dir_path);
				fs.writeFile("test.txt", "This is sample data to be written !", function(err) {
					fs.rename("test.txt", "new.txt", function() {
						fs.stat("new.txt", function(err, stats) {
							console.log("File has a size of: "+ stats.size + " bytes");
							fs.readFile("new.txt", function(err, data) {
								console.log("File contents: "+ data.toString());	
							});
						});
					});
				});
			}
		});
	}
});


//Depending on type of function each method is performing or by refering to nodejs.ord api, decide 
//whether to pass err or both err, data to callback functions.

console.log("This will be printed only after all execution before this finishes.");
console.log("Program ended...!!!");
