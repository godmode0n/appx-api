var gulp = require("gulp"),
    util = require("gulp-util"),
    traceur = require("gulp-traceur"),
    header = require("gulp-header");

gulp.task('compile', function(){
  util.log('compileing');

  return gulp.src('src/**/*.js')
    .pipe(header("require('source-map-support').install();"))
    .pipe(traceur({
      sourceMaps: 'file'
    }))
    .pipe(gulp.dest("build/src"));
});
