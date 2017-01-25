
var extractor 	= require ( 'extract-text-webpack-plugin' 	) ,
	environment	= require ( '../environment' 				);

module.exports 	= {

	test 			: /\.css$/ 				,
	loader 			: extractor.extract ({
		fallbackLoader 	: 'style-loader' 	,
		loader 			: [
			{ 
				loader : 'css-loader' ,
				query 	: {
					// modules 	: true , 
					minimize 	: environment.optimise ,
					sourceMaps 	: environment.debug
				}
			} , 
			{ 
				loader: 'postcss-loader' 
			}
		]
	})
};
