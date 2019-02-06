module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.sass)
		.pipe(
			plugins.stylelint({
				failAfterError: false,
				syntax: 'scss',
				reporters: [{
					formatter: 'string',
					console: true
				}]
			})
		)
	    .pipe(plugins.sass().on('error', plugins.sass.logError))
	    .pipe(plugins.autoprefixer({
	      browsers: ['last 2 versions'],
	      cascade: false
	    }))
	    .pipe(gulp.dest(params.tasksPath.destination.sassDev))
	    .pipe(plugins.browserSync.reload({stream: true}));

	};

};