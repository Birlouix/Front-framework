module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.replaceImgSrc)
	    .pipe(plugins.replaceImageSrc({
	      prependSrc : 'images/',
	      keepOrigin : false
	    }))
	    .pipe(gulp.dest(params.tasksPath.destination.replaceImgSrc));

	};

};