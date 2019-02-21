var gulp = require('gulp'),

    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rigger = require('gulp-rigger');


gulp.task('autoprefix - плагин', function () {
    return gulp.src('*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('nano ', function () {
    return gulp.src('*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});

gulp.task('html:build', function () {
    gulp.src("html/*.html") //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest("../www.news.com/"));//Выплюнем их в папку build

         //И перезагрузим наш сервер для обновлений
});

