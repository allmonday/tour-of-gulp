module.exports = function (gulp, $, config) {
	jshintStylelish = require('jshint-stylish');

	return function () {
		gulp.src('src/**/*.coffee')
			.pipe($.coffee({bare: true}))
			.pipe($.jshint())
			.pipe($.jshint.reporter(jshintStylelish))
			.pipe(gulp.dest('public'));
	}
}
