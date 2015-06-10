module.exports = function (gulp, $, config, tool) {
	return function () {
		gulp.src('./public', {read:false})
			.pipe($.clean({
				force: true
			}))
	}
}
