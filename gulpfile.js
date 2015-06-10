'use stricts';

var gulp = require('gulp');

/* load all plugin, use as $.coffee() */
var $ = require('gulp-load-plugins')({
	'gulp-scss-lint': 'scsslint'
});

/* load configs */
var buildEnv = $.util.env.environment || 'development';
$.util.log($.util.colors.red(buildEnv))

var config = require('./config/' + buildEnv + '.json');
var sequence = require('run-sequence').use(gulp);

tool = {
	onError: function (err) {
		$.util.beep();
		$.util.log($.util.colors.red(err))
	}
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
gulp.task('other', getTask('other'));
gulp.task('clean', getTask('clean'));

/* compositions */
gulp.task('build', function (cb) {
	sequence('clean', ['html', 'style', 'script', 'other'], cb);
});

gulp.task('dev', ['script', 'html', 'style', 'other'], function () {
	gulp.watch('src/**/*.coffee', ['script']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['style']);
});
