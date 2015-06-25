var eslint = require('gulp-eslint'),
    plumber = require('gulp-plumber'),
    gulp = require('gulp');

// run eslint without an additional plugin
gulp.task('lint', function(done) {
  return gulp.src("src/**/*.js")
    .pipe(plumber())
    .pipe(eslint({
      configFile: './.eslintrc',
      envs: [
        'node'
      ]
    }))
    .pipe(eslint.formatEach('stylish', process.stderr))
    .pipe(eslint.failOnError())
});
