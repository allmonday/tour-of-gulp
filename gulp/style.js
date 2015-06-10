/*
compass,
maybe no need for gulp-scss-lint
*/
module.exports = function (gulp, $, config, tool) {
	return function () {
		gulp.src('src/**/*.scss')
			.pipe($.compass({
				config_file: './config.rb',
				css: 'public/css',
				sass: 'src/css'
			}))
			.pipe(gulp.dest('public/css'));
	}
}
