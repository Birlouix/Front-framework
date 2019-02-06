module.exports = function (gulp, plugins, params) {

	return function () {

		plugins.del.sync(['dist/**', '!dist'], {force:true})

	};

};