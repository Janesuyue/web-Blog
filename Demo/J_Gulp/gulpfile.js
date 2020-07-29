const gulp = require('gulp')
const uglify = require('gulp-uglify')

gulp.task('js', function () {
    return gulp.src('src/static/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/static/js/'));
})