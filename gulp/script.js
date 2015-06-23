module.exports = function (gulp, $, config, tool) {
	var src = 'src/**/*.coffee';
	var dest = 'public';

	jshintStylelish = require('jshint-stylish');

	return function () {
		return gulp.src(src)
			// cache changes
			.pipe($.cached('script'))	

			.pipe($.coffee({bare: true}).on('error', $.util.log))

			.pipe($.rememberHistory('script'))

			.pipe($.jshint())
			.pipe($.jshint.reporter(jshintStylelish))

			// put unchanged files back

			/* 如果concat 放在根目录, 放在各自的目录之下 */
			.pipe(config.concat ? $.concat('app.min.js', {
				newLine: ';\n'
			}) : $.util.noop())

			/* >>> read source */
			.pipe(config.minify ? $.sourcemaps.init() : $.util.noop())

			/* minify */
			.pipe(config.minify ? $.uglify() : $.util.noop())

			/* 取出调试中的 debug 信息输出 */
			.pipe(config.minify ? $.stripDebug() : $.util.noop())
			
			.pipe(config.cachebust ? tool.cachebust.resources() : $.util.noop())

			/* <<< write source */
			.pipe(config.minify ? $.sourcemaps.write() : $.util.noop())

			.pipe(gulp.dest(dest))

			.pipe(tool.reload());
	}
}
