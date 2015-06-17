'use stricts';

var gulp = require('gulp');

/* load all plugin, use as $.coffee() */
var $ = require('gulp-load-plugins')({});

/* load configs */
var buildEnv = $.util.env.env || 'development';
$.util.log($.util.colors.red(buildEnv))

/* necessary requires */
var config = require('./config/' + buildEnv + '.json');
$.util.log(config);
var series = require('stream-series');
var sequence = require('run-sequence');
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
		if (server) {
			return this.browserSync.reload({stream: true});
		} else {
			return $.util.noop();
		}
	},
	express: express,
	server: server,
	cachebust: new $.cachebust(), /* cache buster hash resource, then change the resource name in html, so html will be executed at very last */
	series: series
}



/* helper for loading task */
function getTask(task) {
	return require('./gulp/' + task)(gulp, $, config, tool);
}

/* all tasks needed */
gulp.task('clean', getTask('clean'));

/* main tasks */
gulp.task('script', getTask('script'));
gulp.task('html', getTask('html'));
gulp.task('style', getTask('style'));
gulp.task('image', getTask('image'));

/* just copy */
gulp.task('vendor', getTask('vendor'));
gulp.task('other', getTask('other'));

/* optimize */
gulp.task('inject', getTask('inject'));
gulp.task('fixIndex', getTask('fixIndex'));

/* server */
gulp.task('server', getTask('server')); /*todo: 改为可配置的形式*/


/* compositions */
gulp.task('build', ['clean'], function (cb) {
	sequence(['style', 'script', 'image', 'other', 'vendor'], 'html', 'inject', cb);
});


gulp.task('watch', function () {
	gulp.watch('src/**/*.coffee', ['script']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['style']);
	gulp.watch('src/**/*.{jpg,png}', ['image']);
});

gulp.task('dev', function (cb) {
	sequence('build', 'server', 'watch', cb);
})

