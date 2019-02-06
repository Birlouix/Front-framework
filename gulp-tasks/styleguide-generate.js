module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src(params.tasksPath.source.sass)
		    .pipe(plugins.sc5styleguide.generate({
		        title : 'Auchan Styleguide',
		        server : false,
		        rootPath : params.tasksPath.destination.styleguide,
		        overviewPath : params.styleguide.readme,
		        showReferenceNumbers : true,
          		disableEncapsulation : true,
          		readOnly : true,
          		extraHead: [
		            '<style type="text/css">body{background:#FFF!important;</style>'
	          	],
          		appRoot : params.styleguide.appRoot,					// a modifier pour que les scripts pointent vers le lien qui héberge le site
          		styleguideProcessors: {
            		30: function (styleguide) {
            			//console.log(styleguide);
            		}
            	}
		      }))
		    .pipe(gulp.dest(params.tasksPath.destination.styleguide));

	};

};