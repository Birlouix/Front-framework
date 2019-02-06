module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src([ 'dev/vendor/jquery_2.2.4.js', 'dev/js/general.js'])
	    .pipe(plugins.concat('scripts.js'))
	    .pipe(plugins.stripDebug())
	    .pipe(plugins.uglify())
	    .pipe(gulp.dest(params.tasksPath.destination.scripts))
	    .pipe(plugins.browserSync.reload({
	      stream: true
	    }));

	};

};