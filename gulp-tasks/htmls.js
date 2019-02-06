module.exports = function (gulp, plugins, params) {

	return function () {

		gulp.src('dev/**/*.html')
  		.pipe(gulp.dest('dist/'));

	};

};