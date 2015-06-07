/*
compass
*/
module.exports = function (gulp, $, config) {
	return function () {
		gulp.src('src/**/*.scss')
			// .pipe($.sass().on('error', $.sass.logError))
			.pipe($.compass({
				config_file: './config.rb',
				css: 'public/css',
				sass: 'src/css'
			}))
			.pipe(gulp.dest('public/css'));
	}
}
