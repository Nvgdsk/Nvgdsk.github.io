<<<<<<< HEAD
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
=======
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
>>>>>>> b9b5e3abf3bcf7fcade7db78b93c60989f7fb7c6
);