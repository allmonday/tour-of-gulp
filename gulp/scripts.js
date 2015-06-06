module.exports = function (gulp, $, config) {
	return function () {
		gulp.src('src/**/*.coffee')
			.pipe($.coffee({bare: true}))
			.pipe(gulp.dest('public'));
	}
}
