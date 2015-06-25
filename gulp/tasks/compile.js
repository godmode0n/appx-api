var gulp = require("gulp"),
    util = require("gulp-util"),
    compiler = require("gulp-babel"),
    sourcemap = require("gulp-sourcemaps");
    header = require("gulp-header");

gulp.task('compile', ['copy-config'], function(){
  
  return gulp.src('src/**/*.js')
    .pipe(header("require('source-map-support').install();"))
    .pipe(sourcemap.init())
    .pipe(compiler())
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/src"));
});
