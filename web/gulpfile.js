'use strict'

const gulp = require('gulp')
const clean = require('gulp-clean')
const useref = require('gulp-useref')
const babel = require('gulp-babel')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-clean-css')

gulp.task('clean', () => {
  return gulp.src('buld')
             .pipe(clean())
})

gulp.task('html', function () {
  return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulpif('*.js', babel({ presets: ['es2015'] })))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('build'))
})

gulp.task('build', ['clean', 'html'])
