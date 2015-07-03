module.exports = function (gulp, $, config, tool) {

	return function () {
		if (config.server) {
			tool.server.use(tool.express.static('public'));
			tool.server.listen(config.server.port);
			if (config.sync) {
				tool.browserSync({proxy: "localhost:" + config.server.port});
			}
		} else {
			$.util.log($.util.colors.red("server is prohibited"))
		}
	}
}
