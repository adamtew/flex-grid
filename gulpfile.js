var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

gulp.task('styles', function() {
  gulp.src('assets/scss/styles.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
})

gulp.task('default', function() {
  gulp.watch('assets/scss/**/*.scss', ['styles']);
})