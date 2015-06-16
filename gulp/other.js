module.exports = function (gulp, $, config, tool) {
	var src = 'other/**/*';
	var dest = 'public/other';

	return function () {
		if (config.carryOther) {
			return gulp.src(src)
				.pipe(gulp.dest(dest));
		}
	}
}
