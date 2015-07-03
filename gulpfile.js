'use stricts';

var gulp = require('gulp');

/* load all plugin, use as $.coffee(), could rename the plugins */
var $ = require('gulp-load-plugins')();

/* load configs */
var buildEnv = $.util.env.env || 'development';
$.util.log($.util.colors.red(buildEnv))
var config = require('./config/' + buildEnv + '.json');
$.util.log(config);

/* necessary requires */
var series = require('stream-series');
var sequence = require('run-sequence');
var browserSync = require('browser-sync');
var express = require('express');
var server =  config.server ? express() : undefined;

tool = {  // mount requires above to tool
	/* error handler */
	onError: function (err) {
		$.util.beep();
		$.util.log($.util.colors.red(err))
	},
	/* live reload*/
	browserSync: browserSync,
	reload: function () {
		if (this.server && config.sync) {
			return this.browserSync.reload({stream: true});
		} else {
			return $.util.noop();
		}
	},
	express: express,
	server: server,
	/* cache buster hash resource, then change the resource name in html, so html will be executed at very last */
	cachebust: new $.cachebust(), 
	series: series
}





/* ==================
helper for loading task
================== */
function getTask(task) {
	return require('./gulp/' + task)(gulp, $, config, tool);
}

/* all tasks needed */
gulp.task('clean', getTask('clean'));
gulp.task('rename', getTask('rename'));

/* main tasks */
gulp.task('script', getTask('script'));
gulp.task('html', getTask('html'));
gulp.task('style', getTask('style'));
gulp.task('image', getTask('image'));

/* just copy */
gulp.task('vendorJS', getTask('vendorJS'));
gulp.task('vendorCSS', getTask('vendorCSS'));
gulp.task('other', getTask('other'));

/* optimize */
gulp.task('inject', getTask('inject'));
gulp.task('fixIndex', getTask('fixIndex'));

/* server */
gulp.task('server', getTask('server')); /*todo: 改为可配置的形式*/





/* ====================
compositions
==================== */
gulp.task('build', ['clean'], function (cb) {
	sequence(['style', 'script', 'image', 'other', 'vendorJS', 'vendorCSS'], 'html', 'inject', cb);
});

gulp.task('html-plus-inject', function (cb) {
	sequence('html', 'inject', cb);
}) 

gulp.task('watch', function () {
	// 删除文件从remember中删除
	var scriptWatcher = gulp.watch('src/**/*.coffee', ['script']);
	var styleWatcher = gulp.watch('src/**/*.scss', ['style']);
	gulp.watch('src/**/*.html', ['html-plus-inject']);
	gulp.watch('src/**/*.{jpg,png}', ['image']);

	scriptWatcher.on('change', function (event) {
		if (event.type === 'deleted') {
			delete $.cached.caches['script'][event.path];
			$.rememberHistory.forget('script', event.path);
		}
	});
	// styleWatcher.on('change', function (event) {
	// 	if (event.type === 'deleted') {
	// 		delete $.cached.caches['style'][event.path];
	// 		$.rememberHistory.forget('style', event.path);
	// 	}
	// });

});

gulp.task('dev', function (cb) {
	sequence('build', 'server', 'watch', cb);
})

