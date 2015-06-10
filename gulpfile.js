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

gulp.task('script', getTask('script'));
gulp.task('html', getTask('html'));
gulp.task('style', getTask('style'));
gulp.task('other', getTask('other'));
gulp.task('clean', getTask('clean'));

gulp.task('default', ['script', 'html', 'style', 'other']);

gulp.task('dev', ['script', 'html', 'style', 'other'], function () {
	gulp.watch('src/**/*.coffee', ['script']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['style']);
});
