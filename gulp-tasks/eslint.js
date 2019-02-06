module.exports = function (gulp, plugins, params) {

	return function () {

		var js = plugins.globule.find(params.tasksPath.source.scripts + '*.js');

		gulp.src(js)
	      .pipe(
	        plugins.eslint()
	      )
	      .pipe(
	        plugins.eslint.format()
	      )
	      .pipe(
	        plugins.eslint.failAfterError()
	      );

	};

};