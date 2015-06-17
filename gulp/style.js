/* compass, maybe no need for gulp-scss-lint */

module.exports = function (gulp, $, config, tool) {
	var src = 'src/**/*.scss';
	var dest = 'public/css';

	return function () {
		return gulp.src(src)

			.pipe($.compass({
				config_file: './config.rb',
				css: '.tmp/css',  /* save default output to trash and let output dealed by follow steps */
				sass: 'src/css'
			}))

			/* concat css */
			.pipe(config.concat ? $.concatCss(
				config.minify ? '../app.min.css': '../app.css') : $.util.noop())

			/* >>> read source */
			.pipe(config.minify ? $.sourcemaps.init() : $.util.noop())

			/* minify css */
			.pipe(config.minify ? $.minifyCss() : $.util.noop())

			.pipe(config.cachebust ? tool.cachebust.resources() : $.util.noop())
			
			/* <<< write source */
			.pipe(config.minify ? $.sourcemaps.write() : $.util.noop())
			
			.pipe(gulp.dest(dest))

			.pipe(tool.reload());
	}
}
