module.exports = function (gulp, $, config, tool) {
	/* variables */	
	var src = ['public/**/*.{js, css}'];
	var dest = 'public';

	return function () {
		return gulp.src(src)
			.pipe(config.cachebust ? tool.cachebust.resources() : $.util.noop())
			
			.pipe(gulp.dest(dest))
	}
}
