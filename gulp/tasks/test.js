var gulp = require("gulp"),
    util = require("gulp-util"),
    mocha = require("gulp-mocha");

gulp.task('test', ['compile'], function(){
  return gulp.src("build/src/**/*.spec.js")
    .pipe(mocha());
});
