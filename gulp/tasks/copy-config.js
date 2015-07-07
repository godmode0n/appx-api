var gulp = require("gulp"),
    util = require("gulp-util"),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('copy-config', function(){
  
  return gulp.src('config/**/*.json')
    .pipe(gulp.dest("build/config"));
});
