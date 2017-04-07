var fs = require("fs");

var dir_path = "D:/TempNode";

//All methods in fs are available in sync and async versions. For async version, all logic must reside in callback methods, to ensure steps execute only when 
//previous check is done.

if(fs.existsSync(dir_path)) {
	console.log("Dir exists... Removing...");
	
	/*//Try this later - did not work
	 * var dirs = fs.readdirSync(dir_path)
		
	dirs.forEach(function() {
		fs.unlinkSync(dir);
	})*/
	
	if(fs.existsSync(dir_path + "/new.txt")) {
		fs.unlinkSync(dir_path + "/new.txt");
	}
	fs.rmdirSync(dir_path);
}


fs.mkdirSync(dir_path);

if(fs.existsSync(dir_path)) {
	process.chdir(dir_path);
	fs.writeFileSync("test.txt", "This is sample data to be written !");
	fs.renameSync("test.txt", "new.txt");
	console.log("File has a size of: "+ fs.statSync("new.txt").size + " bytes");
	console.log("File contents: "+ fs.readFileSync("new.txt").toString());
}

console.log("This will be printed only after all execution before this finishes.");
console.log("Program ended...!!!");
