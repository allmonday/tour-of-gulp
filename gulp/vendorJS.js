/* to be continue*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		
		var vendors = [
			'bower_components/fastclick/lib/fastclick.js/',
			'bower_components/jquery/dist/jquery.js/',
			// 'bower_components/vue/dist/vue.js',
			// 'bower_components/uikit/js/uikit.js'
		]

		return gulp.src(vendors)

			.pipe(config.concat ? $.concat('vendor.js', {
				newLine: ';\n'
			}) : $.util.noop())

			.pipe(gulp.dest('public/vendor'));
	}
}
