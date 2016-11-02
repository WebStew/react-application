
var webpack 		= require ( 'webpack' 						) 	,
	path 			= require ( 'path' 							) 	,
	Extractor 		= require ( 'extract-text-webpack-plugin' 	) 	,
	postcss 		= require ( './postcss.config' 				) 	,
	directories 	= {
		build 		: path.resolve ( __dirname , 'public' 		) 	,
		application : path.resolve ( __dirname , 'development' 	)
	} 																;

module.exports = {
	entry 		: {
		application 	: directories.application + '/application'
	} 																			,

	output 		: {
		chunkFilename 	: '[id].js' 											,
		filename 		: '[name].js'											,
		path 			: directories.build
	} 																			,

	resolve 	: {
		root 	: [
			path.resolve ( './development' )
		] 																		,
		extensions 			: [
			'' 																	,
			'.css' 																,
			'.js' 																,
			'.jsx'
		]
	} 																			,
	module 		: {
		loaders 	: [
			{
				test 	: /\.css$/ 												,
				loader 	: Extractor.extract (
					'style-loader' 												,
					'css-loader' 												,
					'postcss-loader'
				)
			} 																	,

			{
				test 	: /\.jsx?/ 												,
				include : directories.application 								,
				exclude : /node_modules/ 										,
				loader 	: 'babel-loader' 										,
				query 	: {
					presets : [
						'es2015' 												,
						'react'
					]
				}
			}
		]
	} 																			,
	plugins 	: [
		new Extractor ( '[name].css', {
			allChunks : true
		})
	]
};
