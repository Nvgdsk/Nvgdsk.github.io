var gulp = require('gulp'),

    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');
var rigger = require('gulp-rigger');


var templater = require('gulp-templater');
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
gulp.task('test', function() {
    gulp.src([
        './source/pages/**'  // папки со страницами
    ])
        .pipe(templater({
            layout: 'source/template/layout/index.html', // путь до шаблона
            dist: 'public', // папка в которую будут сложены готовые страницы
            source: 'source/pages', // участок пути до папки, который нужно исключить
            partials: 'source/partials' // части страниц типа footer
        }));
});

