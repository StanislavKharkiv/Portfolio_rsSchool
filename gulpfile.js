const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

sass.compiler = require('node-sass');


gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
})

gulp.task('scripts', () => {
  return gulp.src('./assets/js/src/*.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./assets/js'))
})

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'))
  gulp.watch('./assets/js/src/*.js', gulp.series('scripts'))
})