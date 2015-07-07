var gulp = require("gulp"),
    clean = require("gulp-clean");

gulp.task('clean', function(){
  return gulp.src('build/src/*', {read: false})
    .pipe(clean());
});
