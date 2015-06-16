module.exports = function (gulp, $, config, tool) {
	/* variables */	
	var src = ['public/index.html'];
	var dest = 'public';

	return function () {
		return gulp.src(src)

			.pipe(config.cachebust ? tool.cachebust.references() : $.util.noop()) 

			.pipe(gulp.dest(dest))
			
			.pipe(tool.reload());
	}
}
