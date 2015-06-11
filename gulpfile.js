'use stricts';

var gulp = require('gulp');

/* load all plugin, use as $.coffee() */
var $ = require('gulp-load-plugins')({});

/* load configs */
var buildEnv = $.util.env.environment || 'development';
$.util.log($.util.colors.red(buildEnv))

/* necessary requires */
var config = require('./config/' + buildEnv + '.json');
var sequence = require('run-sequence').use(gulp);
var browserSync = require('browser-sync');
var express = require('express');
var server = express();

tool = {
	/* error handler */
	onError: function (err) {
		$.util.beep();
		$.util.log($.util.colors.red(err))
	},
	/* live reload*/
	browserSync: browserSync,
	reload: function () {
		return this.browserSync.reload({stream: true})	
	},
	express: express,
	server: server,
	/* cache buster
		hash resource, then change the resource name in html, 
		so html will be executed at very last
	*/
	cachebust: new $.cachebust()
}



/* helper for loading task */
function getTask(task) {
	return require('./gulp/' + task)(gulp, $, config, tool);
}

/* all tasks needed */
gulp.task('vendor', getTask('vendor'));
gulp.task('script', getTask('script'));
gulp.task('html', getTask('html'));
gulp.task('style', getTask('style'));
gulp.task('image', getTask('image'));
gulp.task('other', getTask('other'));
gulp.task('clean', getTask('clean'));
gulp.task('server', getTask('server'));


/* compositions */
gulp.task('build', function (cb) {
	sequence('clean', ['style', 'script', 'image', 'other'], 'html', cb); // cachebust
});

gulp.task('watch', function () {
	gulp.watch('src/**/*.coffee', ['script']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['style']);
	gulp.watch('src/**/*.{jpg,png}', ['image']);
});

gulp.task('dev', function (cb) {
	sequence('build', 'watch', 'server', cb);
})

