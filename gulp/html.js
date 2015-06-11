module.exports = function (gulp, $, config, tool) {
	return function () {
		return gulp.src('src/**/*.html')
			.pipe($.cached('html'))
			.pipe($.plumber({
				errorHandler: tool.onError
			}))
			/*todo: inject seperated or concated*/

			.pipe(config.cachebust ? tool.cachebust.references() : $.util.noop())

			.pipe(gulp.dest('public'))
			
			.pipe(tool.reload());
	}
}
