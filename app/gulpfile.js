'use strict';

var gulp       = require('gulp');
var del        = require('del');
var path       = require('path');
var browserify = require('browserify');
var reactify   = require('reactify');
var watchify   = require('watchify');
var source     = require('vinyl-source-stream');
var $          = require('gulp-load-plugins')();

var prod = $.util.env.prod;

var paths = {
	scripts: ['src/js/**/*.js'],
	images: 'src/images/**/*',
	html: 'src/*.html',
	css: 'src/css/*.css'
};

var options = {
	port: 8080,
	root: 'dist',
	livereload: true
};

// Clean
gulp.task('clean', function(cb) {
	del(['dist/css', 'dist/js', 'dist/images'], cb);
});

// Styles
gulp.task('css', function() {
	return gulp.src('src/css/**/*')
		.pipe($.plumber({
			errorHandler: onError
		}))
		.pipe($.concat('main.css'))
		.pipe($.autoprefixer('last 3 versions'))
		.pipe(gulp.dest('dist/css'))
		.pipe($.size());
});


// Scripts
gulp.task('scripts', function() {
	var bundler;
	bundler = browserify({
		basedir: __dirname,
		noparse: ['react/addons', 'reflux', 'fastclick', 'react-router'],
		entries: ['./src/js/index.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	});

	bundler = watchify(bundler);

	function rebundle() {
		console.log('Bundling Scripts...');
		var start = Date.now();
		return bundler.bundle()
			.on('error', onError)
			.pipe(source('bundle.js'))
			.pipe(prod ? $.streamify($.uglify()) : $.util.noop())
			.pipe(gulp.dest('dist/js'))
			.pipe($.notify(function() {
				console.log('Bundling Complete - ' + (Date.now() - start) + 'ms');
			}));
	}

	bundler.on('update', rebundle);

	return rebundle();
});

// Copy all static images
gulp.task('images', ['clean'], function() {
	return gulp.src(paths.images)
		.pipe(gulp.dest('dist/images'));
});

// HTML
gulp.task('html', function() {
	return gulp.src(paths.html)
		.pipe($.useref())
		.pipe(gulp.dest('dist'))
		.pipe($.size());
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

gulp.task('connect', function(){
	$.connect.server(options);
});

gulp.task('build', ['clean', 'css', 'scripts', 'images', 'html']);

//gulp.task('build', ['clean', 'scripts']);

gulp.task('serve', ['connect', 'watch']);

// Watch
gulp.task('watch', ['html', 'css', 'scripts', 'connect'], function() {
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/css/**/*.css', ['css']);
	gulp.watch('src/images/**/*', ['images']);
});

gulp.task('default', ['jshint']);

// gulp-plumber for error handling
function onError() {
	/* jshint ignore:start */
	var args = Array.prototype.slice.call(arguments);
	$.util.beep();
	$.notify.onError({
		title: "Compile Error",
		message: "<%= error %>"
	}).apply(this, args);
	this.emit('end'); // Keep gulp from hanging on this task
	/* jshint ignore:end */
}
