
var gulp = require('gulp');
var conf = require('./conf');
var concat = require('gulp-concat');
var path = require('path');
var join = path.join;

gulp.task('build.css.dev', function() {
  return gulp.src([join(conf.paths.src, '**/*.css'), join('node_modules/bootstrap','**/bootstrap.css')])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'));
});