module.exports = function (gulp, $, config, tool) {
	return function () {
		gulp.src('src/**/*.html')
			.pipe($.cached('html'))
			.pipe($.plumber({
				errorHandler: tool.onError
			}))
			.pipe(gulp.dest('public'));
	}
}
