module.exports = function (gulp, plugins, params) {

  return function () {

    var result = plugins.globule.find(params.tasksPath.destination.sassDist + '/*.css', '!' + params.tasksPath.destination.sassDist + '/*.min.css');
    // SASS Compile
    return gulp.src(result)
      .pipe(
        plugins.combineMq({
          beautify: true
        })
      )
      .pipe(
        plugins.cssnano(
          {zindex: false}
        )
      )
      .pipe(
        gulp.dest(
          params.tasksPath.destination.sassDist
        )
      );

  };

};
