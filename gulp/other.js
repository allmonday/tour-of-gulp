module.exports = function (gulp, $, config) {
	return function () {
		gulp.src('other/**/*')
			.pipe(gulp.dest('public/other'));
	}
}
