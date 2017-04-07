var gulp = require("gulp");
var minify = require("gulp-minify");

//Accessed using gulp cmd by default - gulp
gulp.task("default", function(){
	return gulp.src("./src/*.js").pipe(minify()).pipe(gulp.dest("./target"))
	// ./src/** - would mean everything under src and under child folders of src
});

/*
 // Accessed using gulp <task name> - gulp minify
 gulp.task("minify", function(){
	return gulp.src("./src/*.js").pipe(minify()).pipe(gulp.dest("./target"))
	// ./src/** - would mean everything under src and under child folders of src
});
*/