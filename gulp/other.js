module.exports = function (gulp, $, config) {
	return function () {
		if (config.carryOther) {
			gulp.src('other/**/*')
				.pipe(gulp.dest('public/other'));
		}
	}
}
