'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');

var paths = {
	scripts: ['src/js/**/*.js'],
	images: 'src/img/**/*',
	html: 'src/*.html',
	css: 'src/css/*.css'
};

var options = {
	port: 8080,
	root: 'dist',
	livereload: true
};

// delete the dist directory
gulp.task('clean', function(cb) {
	del(['dist'], cb);
});

// Minify and copy all JavaScript (except vendor scripts)
// with sourcemaps all the way down
gulp.task('scripts', ['clean'], function() {
	return gulp.src(paths.scripts)
		.pipe($.sourcemaps.init())
		//.pipe($.reactify())
		//.pipe($.streamify($.uglify())).on('error', errorHandler) //doesn't work with jsx
		.pipe($.concat('bundle.js'))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
	return gulp.src(paths.images)
		//.pipe($.imagemin({optimizationLevel: 5})).on('error', errorHandler) //buggy
		.pipe(gulp.dest('dist/img'));
});

// Copy all css files
gulp.task('css', ['clean'], function() {
	return gulp.src(paths.css)
		.pipe(gulp.dest('dist/css'));
});

// Copy all html files
gulp.task('html', ['clean'], function() {
	return gulp.src(paths.html)
		.pipe(gulp.dest('dist'));
});

// Lint JavaScript
gulp.task('jshint', function () {
	return gulp.src(paths.scripts)
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish'));
});


gulp.task('reload', function () {
	gulp.src('./dist/*.html')
	.pipe($.connect.reload());
});


gulp.task('watch', function () {
	gulp.watch(['./dist/*.html'], ['reload']);
});


gulp.task('connect', function(){
	$.connect.server(options);
});

gulp.task('build', ['clean', 'css', 'scripts', 'images', 'html']);

//gulp.task('build', ['clean', 'scripts']);

gulp.task('serve', ['connect', 'watch']);

gulp.task('default', ['jshint']);

// Handle the error
function errorHandler (error) {
	console.log(error.toString());
	this.emit('end');
}
