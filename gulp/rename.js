module.exports = function (gulp, $, config, tool) {
	/* variables */	
	var src = './src/index.html';
	var dest = './public';

	return function () {
		gulp.src(src)
			.pipe($.rename('./index.2.html'))
			.pipe(gulp.dest(dest))
	}
}
