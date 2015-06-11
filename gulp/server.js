module.exports = function (gulp, $, config, tool) {

	return function () {
		tool.server.use(tool.express.static('public'));
		tool.server.listen(8000);
		tool.browserSync({proxy: 'localhost:8000'});
	}
}
