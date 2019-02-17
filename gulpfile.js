var gulp = require('gulp'),

    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');
var rigger = require('gulp-rigger');


gulp.task('autoprefix - плагин', function () {
    return gulp.src('sass-style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('nano ', function () {
    return gulp.src('sass-style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});
gulp.task('html', function() {
    gulp.src('index.html')
        .pipe(rigger())
        .pipe(gulp.dest('index.html'));
});

