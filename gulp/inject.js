/*
NOTICE: 在所有src 的 task 完成之后执行, 对输出文件做处理.
*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		var vendorStream = gulp.src(['./public/vendor/**/*'], {read: false});
		var appStream = gulp.src(['./public/**/*.{js,css}', '!public/vendor/**/*'], {read: false});
		
		return gulp.src('./public/index.html')
			.pipe($.inject(tool.series(vendorStream, appStream), {relative: true}))
			.pipe(gulp.dest('./public'));
	}
}
