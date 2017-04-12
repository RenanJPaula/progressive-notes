'use strict'

const gulp = require('gulp')
const clean = require('gulp-clean')
const useref = require('gulp-useref')
const babel = require('gulp-babel')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const minifyCss = require('gulp-clean-css')
const runSequence = require('run-sequence')
const env = require('./env')

gulp.task('clean', () => {
  return gulp.src('build')
             .pipe(clean())
})

gulp.task('html', () => {
  return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif(env.isProduction, gulpif('*.css', minifyCss())))
        .pipe(gulpif(env.isProduction, gulpif('*.js', babel({ presets: ['es2015'] }))))
        .pipe(gulpif(env.isProduction, gulpif('*.js', uglify())))
        .pipe(gulp.dest('build'))
})

gulp.task('imgs', () => {
  return gulp.src('src/assets/imgs/**/*')
             .pipe(gulp.dest('build/assets/imgs'))
})

gulp.task('app-manifest', () => {
  return gulp.src('src/app.manifest')
             .pipe(gulp.dest('build'))
})

gulp.task('offiline-manifest', () => {
  return gulp.src('src/offline.manifest')
             .pipe(gulp.dest('build'))
})

gulp.task('service-workers', () => {
  return gulp.src('src/assets/js/service-workers/*.js')
             .pipe(gulp.dest('build/assets/js/service-workers'))
})

gulp.task('build', (cb) => {
  return runSequence('clean', ['html', 'imgs', 'app-manifest', 'offiline-manifest', 'service-workers'], cb)
})
