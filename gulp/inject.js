/*
NOTICE: 在所有src 的 task 完成之后执行, 对输出文件做处理.
*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		
		return gulp.src('./public/index.html')
			.pipe($.inject(gulp.src('./public/**/*.{js,css}', {read: false}), {relative: true}))
			.pipe(gulp.dest('./public'));
	}
}
