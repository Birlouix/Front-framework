module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.sass)
	    .pipe(plugins.sass())
	    .pipe(plugins.autoprefixer({
	      browsers: ['last 2 versions'],
	      cascade: false
	    }))
	    .pipe(gulp.dest(params.tasksPath.destination.sassDist))
	    .pipe(plugins.browserSync.reload({stream: true}));

	};

};