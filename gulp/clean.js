module.exports = function (gulp, $, config, tool) {
	/* variables */	
	var src = './public/';

	return function () {
		return gulp.src(src, {read:false})
			.pipe($.clean({
				force: true
			}))
			// .pipe($.notify({message: 'clean complete'}))
	}
}
