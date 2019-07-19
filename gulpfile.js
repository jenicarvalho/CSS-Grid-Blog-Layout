'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function() {
  return gulp
    .src('./src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
})

gulp.task('sass:watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass:watch'])
