/* to be continue*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		var vendors = [
			'bower/**/'
		]
		return gulp.src()
			.pipe(gulp.dest('public/css'));
	}
}
