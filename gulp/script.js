module.exports = function (gulp, $, config, tool) {
	jshintStylelish = require('jshint-stylish');

	return function () {
		return gulp.src('src/**/*.coffee')

			.pipe($.coffee({bare: true}))

			.pipe($.jshint())
			.pipe($.jshint.reporter(jshintStylelish))

			.pipe(config.minify ? $.uglify() : $.util.noop())
			/* 如果concat 放在根目录, 负责各自的目录之下 */
			.pipe(config.concat ? $.concat('app.min.js', {
				newLine: ';\n'
			}) : $.util.noop())

			
			.pipe(gulp.dest('public'));
	}
}
