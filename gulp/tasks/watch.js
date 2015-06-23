var gulp = require("gulp");
var watch = require("gulp-watch");

gulp.task("watch", function(){
  gulp.watch('src/**/*.js', ['default']);

});
