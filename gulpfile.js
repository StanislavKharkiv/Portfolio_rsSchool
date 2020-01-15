const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', ()=> {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
})
function defaultTask(cb) {
  console.log('default');
  cb();
}

gulp.task('watch', ()=> {
  gulp.watch('./sass/**/*.scss', gulp.parallel('sass'))
})

exports.default = defaultTask