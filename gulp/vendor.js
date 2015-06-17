/* to be continue*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		
		var vendors = [
			'node_modules/jquery/dist/jquery.js/',
			'node_modules/angular/angular.js/',
		]

		return gulp.src(vendors)

			.pipe(config.concat ? $.concat('vendor.js', {
				newLine: ';\n'
			}) : $.util.noop())

			.pipe(gulp.dest('public/vendor'));
	}
}
