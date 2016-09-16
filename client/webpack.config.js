
var webpack 		= require ( 'webpack' 	) ,
	path 			= require ( 'path' 		) ,
	directories 	= {
		build 		: path.resolve ( __dirname , 'public/javascripts' 		) ,
		application : path.resolve ( __dirname , 'development/javascripts' 	)
	} 																,
	configuration 	= {
		entry 		: directories.application + '/application.jsx' 	,
		output 		: {
			path 		: directories.build 						,
			filename 	: 'application.js'
		} 															,
		module : {
			loaders 	: [{
				test 	: /\.jsx?/ 									,
				include : directories.application 					,
				loader 	: 'babel'
			}]
		}
	};

module.exports = configuration;
