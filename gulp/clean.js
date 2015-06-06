module.exports = function (gulp, $, config) {
	return function () {
		gulp.src(['./public'], {read:false})
			.pipe($.clean({
				force: true
			}));
	}
}
