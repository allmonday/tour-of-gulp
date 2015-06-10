module.exports = function (gulp, $, config, tool) {
	return function () {
		return gulp.src('./public', {read:false})
			.pipe($.clean({
				force: true
			}))
	}
}
