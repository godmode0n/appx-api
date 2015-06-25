var gulp = require("gulp"),
    util = require("gulp-util"),
    traceur = require("gulp-traceur"),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('copy-config', function(){
  
  return gulp.src('config/**/*.json')
    .pipe(gulp.dest("build/config"));
});
