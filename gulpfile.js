var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var connect = require('gulp-connect');

gulp.task('styles', function() {
  gulp.src('assets/scss/styles.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch-styles', function() {
  gulp.watch('assets/scss/**/*.scss', ['styles']);
});

gulp.task('connect', function() {
  connect.server({ port: 7890, livereload: true })
});

gulp.task('default', [ 'connect', 'watch-styles' ]);