module.exports = function (gulp, $, config, tool) {
	var src = 'src/**/*.coffee';
	var dest = 'public';

	jshintStylelish = require('jshint-stylish');

	return function () {
		return gulp.src(src)

			.pipe($.coffee({bare: true}))

			.pipe($.jshint())
			.pipe($.jshint.reporter(jshintStylelish))

			.pipe(config.minify ? $.uglify() : $.util.noop())
			.pipe(config.minify ? $.stripDebug() : $.util.noop())
			/* 如果concat 放在根目录, 负责各自的目录之下 */
			.pipe(config.concat ? $.concat('app.min.js', {
				newLine: ';\n'
			}) : $.util.noop())
			
			.pipe(config.cachebust ? tool.cachebust.resources() : $.util.noop())

			.pipe(gulp.dest(dest))

			.pipe(tool.reload());
	}
}
