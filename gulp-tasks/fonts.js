module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.fonts)
  		.pipe(gulp.dest(params.tasksPath.destination.fonts));

	};

};