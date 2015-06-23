var gulp = require("gulp"),
    util = require("gulp-util"),
    mocha = require("gulp-mocha");

gulp.task('test', ['compile-tests', 'compile'], function(){
  return gulp.src("build/test/**/*.js")
    .pipe(mocha({reporter : 'nyan'}));
});
