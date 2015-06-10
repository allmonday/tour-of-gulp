module.exports = function (gulp, $, config, tool) {
	return function () {
		if (config.carryOther) {
			return gulp.src('other/**/*')
				.pipe(gulp.dest('public/other'));
		}
	}
}
