module.exports = function (gulp, $, config) {
	return function () {
		gulp.src('src/**/*.html')
			.pipe(gulp.dest('public'));
	}
}
