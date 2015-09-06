/* to be continue*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		
		var vendors = [
			// 'bower_components/uikit/css/uikit.css'
			'src/css/vendor/animate.css'
		]

		return gulp.src(vendors)

			.pipe(config.concat ? $.concat('vendor.css') : $.util.noop())

			.pipe(gulp.dest('public/vendor'));
	}
}
