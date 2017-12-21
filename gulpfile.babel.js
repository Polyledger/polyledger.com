'use-strict'

let pump       = require('pump')
let del        = require('del')
let gulp       = require('gulp')
let util       = require('gulp-util')
let babel      = require('gulp-babel')
let concat     = require('gulp-concat')
let minifyHTML = require('gulp-htmlmin')
let minifyCSS  = require('gulp-clean-css')
let sourcemaps = require('gulp-sourcemaps')
let cachebust  = require('gulp-cache-bust')
let minifyJS   = require('gulp-uglify')

gulp.task('clean-js', () => {
	return del(['js/bundle.min.js'])
})

gulp.task('clean-css', () => {
	return del(['css/stylesheet.min.css'])
})

gulp.task('minify-html', () => {
  return gulp.src('*.html')
    .pipe(minifyHTML({collapseWhitespace: false, removeComments: true}))
    .pipe(gulp.dest('.'))
})

gulp.task('minify-css', ['clean-css'], () => {
  return gulp.src(['css/*.css', '!css/vendor/**'])
    .pipe(sourcemaps.init())
    .pipe(concat('stylesheet.min.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
})

gulp.task('minify-js', ['clean-js'], () => {
  return gulp.src(['js/**/*.js', '!js/vendor/**'])
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.js'))
    .pipe(babel())
    .pipe(minifyJS())
    .on('error', (err) => { util.log(util.colors.red('[Error]'), err.toString())})
    .pipe(gulp.dest('js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'))
})

gulp.task('watch', () => {
  gulp.watch('index.html', ['minify-html'])
  gulp.watch(['css/**/*.css', '!css/stylesheet.min.css'], ['minify-css'])
  gulp.watch(['js/**/*.js', '!js/bundle.min.js'], ['minify-js'])
})

gulp.task('default', ['watch'])
