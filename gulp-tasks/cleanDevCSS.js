module.exports = function (gulp, plugins, params) {

	return function () {

		plugins.del(['dev/style'], {force:true});

	};

};