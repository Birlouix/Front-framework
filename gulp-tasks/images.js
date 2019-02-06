module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.images)
		.pipe(plugins.cache(plugins.imagemin({  //cache pour ne pas régénérer les images à chaque enregistrement de fichier
			interlaced: true
	    })))
	  	.pipe(gulp.dest(params.tasksPath.destination.images));
	  	
	};

};