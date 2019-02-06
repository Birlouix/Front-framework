module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.useref)
		    .pipe(plugins.useref())
		    .pipe(plugins.gulpIf('*.js', plugins.uglify()))
		    .pipe(plugins.gulpIf('*.css', plugins.cssnano()))
		    .pipe(gulp.dest(params.tasksPath.destination.useref));

    };

};