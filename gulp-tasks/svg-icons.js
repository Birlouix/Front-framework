module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.SVGicons)
		    .pipe(plugins.svgSymbols({
	    		templates : ['default-svg', 'default-css', 'default-demo']
	    	}))
		    .pipe(gulp.dest(params.tasksPath.destination.SVGicons));

	};

};