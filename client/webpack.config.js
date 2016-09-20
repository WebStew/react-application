
var webpack 		= require ( 'webpack' 	) ,
	path 			= require ( 'path' 		) ,
	directories 	= {
		build 		: path.resolve ( __dirname , 'public/javascripts' 		) ,
		application : path.resolve ( __dirname , 'development/javascripts' 	)
	} 																,
	configuration 	= {
		entry 		: directories.application + '/router.jsx' 	,
		output 		: {
			path 		: directories.build 						,
			filename 	: 'router.js'
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
