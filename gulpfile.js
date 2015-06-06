'use stricts';

var gulp = require('gulp');

/* load all plugin, use as $.coffee() */
var $ = require('gulp-load-plugins')();

/* load configs */
var buildEnv = $.util.env.environment || 'development';
var config = require('./config/' + buildEnv + '.json')

/* helper for loading task */
function getTask(task) {
	return require('./gulp/' + task)(gulp, $, config);
}

gulp.task('scripts', getTask('scripts'))
gulp.task('html', getTask('html'))
gulp.task('style', getTask('style'))

gulp.task('default', ['scripts', 'html', 'style'], function () {
	gulp.watch('src/**/*.coffee', ['scripts']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['style']);
});
