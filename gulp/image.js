module.exports = function (gulp, $, config, tool) {
	return function () {
		return gulp.src(['src/**/*.{jpg,png}'])

			.pipe(config.minify ? $.imagemin() : $.util.noop())

			.pipe(config.cachebust ? tool.cachebust.resources() : $.util.noop())
			
			.pipe(gulp.dest('public'));
	}
}
