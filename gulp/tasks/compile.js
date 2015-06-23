var gulp = require("gulp"),
    util = require("gulp-util"),
    traceur = require("gulp-traceur"),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', function(){
  util.log('compileing');

  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur({
      sourceMaps: 'file'
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/src"));
});
