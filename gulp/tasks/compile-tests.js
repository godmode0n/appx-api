var gulp = require("gulp"),
    util = require("gulp-util"),
    traceur = require("gulp-traceur"),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('compile-tests', function(){
  util.log('compiling');

  return gulp.src('test/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur({
      sourceMaps: 'file'
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/test"));
});
