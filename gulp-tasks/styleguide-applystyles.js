module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.styleguide)
		    .pipe(plugins.sass({
		      errLogToConsole: true
		    }))
		    .pipe(plugins.sc5styleguide.applyStyles())
		    .pipe(gulp.dest(params.tasksPath.destination.styleguide));

	};

};