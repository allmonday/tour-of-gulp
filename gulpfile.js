'use stricts';

var gulp = require('gulp');

/* load all plugin, use as $.coffee() */
var $ = require('gulp-load-plugins')({
	'gulp-scss-lint': 'scsslint'
});

/* load configs */
var buildEnv = $.util.env.environment || 'development';
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
gulp.task('script', getTask('script'));
gulp.task('html', getTask('html'));
gulp.task('style', getTask('style'));
gulp.task('other', getTask('other'));
gulp.task('clean', getTask('clean'));


/* compositions */
gulp.task('new-build', function (cb) {
	/* first clean public folder, then do async tasks
		 however, it not always works well: 
		 Error: ENOENT, open '/Users/tangmin/tour-of-gulp/public/template/index.html'
	*/
	sequence('clean', ['html', 'style', 'script', 'other'], cb);
});

gulp.task('build', ['html', 'style', 'script', 'other']);

gulp.task('dev', ['script', 'html', 'style', 'other'], function () {
	gulp.watch('src/**/*.coffee', ['script']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.scss', ['style']);
});
