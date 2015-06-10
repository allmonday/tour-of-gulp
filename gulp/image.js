module.exports = function (gulp, $, config, tool) {
	return function () {
		return gulp.src(['src/**/*.{png, jpg}', 'src/**/*.{ttf, woff, eof, svg}'])
			.pipe(gulp.dest('public'));
	}
}
