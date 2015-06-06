module.exports = function (gulp, $, config) {
	return function () {
		gulp.src('src/**/*.scss')
			.pipe($.sass().on('error', $.sass.logError))
			.pipe(gulp.dest('public'));
	}
}
