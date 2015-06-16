module.exports = function (gulp, $, config, tool) {
	/* variables */	
	var src = ['public/**/*.html'];
	var dest = 'public';

	return function () {
		return gulp.src(src)
			/* 根据路径做最小匹配修改: a/b/c.css -> a/b/c.css.2135db.css 
				html 中
				z/a/b/c.css 会被替换
				b/c.css 不会被替换
			*/
			.pipe(config.cachebust ? tool.cachebust.references() : $.util.noop()) 
			
			.pipe(gulp.dest(dest))
	}
}
