"use strict";

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),

    rename = require('gulp-rename'),
    concat = require('gulp-concat'),

    gulpif = require('gulp-if'),
    arg = require('yargs')
        .alias('d', 'dev')
        .argv,

    config = {
        path: {
            sass: {
                src: './web/src/sass/eurocart.sass',
                dest: './web/dist/.',
                watch: './web/src/sass/**/*'
            },
            js: {
                src: [
                    './vendor/bower/angular/angular.min.js',
                    './vendor/bower/angular-animate/angular-animate.min.js',
                    './vendor/bower/angular-route/angular-route.min.js',
                    './web/src/js/eurocart.js',
                    './web/src/js/**/*.js'
                ],
                dest: './web/dist/.',
                watch: ['./web/src/js/**/*.js']
            }
        },
        browser: ["last 2 versions"],
        csso: {
            comments: false,
            sourceMap: false
        }
    };

gulp.task('sass', function () {
    return gulp.src(config.path.sass.src)
        .pipe(
            gulpif(arg.dev, sourcemaps.init())
        )
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(
            gulpif(arg.dev, sourcemaps.write())
        )
        .pipe(
            gulpif(!arg.dev, csso(config.csso))
        )
        .pipe(gulp.dest(config.path.sass.dest))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: './' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('sass:watch', function () {
    arg.dev = true;
    gulp.watch(config.path.sass.watch, gulp.series('sass'));
});

gulp.task('js', function () {
    return gulp.src(config.path.js.src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .on('error', function(e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(concat('eurocart.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.path.js.dest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js:watch', function () {
    gulp.watch(config.path.js.watch, gulp.series('js'));
});

gulp.task('default', gulp.parallel(
    'sass',
    'js'
));

gulp.task('watch', gulp.parallel(
    'sass:watch',
    'js:watch',
    'browser-sync'
));
