/*
NOTICE: 在所有src 的 task 完成之后执行, 对输出文件做处理.
*/
module.exports = function (gulp, $, config, tool) {
	/* variables */	
	var target = gulp.src('src/index.html');
	var sources = gulp.src(['public/**/*.js', 'public/**/*.css'], {read: false});
	var dest = 'public';

	return function () {
		return target.pipe($.inject(sources), {relative: true})
			.pipe(gulp.dest(dest))
	}
}
