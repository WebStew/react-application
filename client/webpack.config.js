

var Extractor = require ( 'extract-text-webpack-plugin' );
//var webpack = require ( 'webpack' );

var configuration 	= {
		output 		: require ( './configuration/build/output' 				) ,
		resolver 	: require ( './configuration/build/module-resolver' 	)
	} ,

	filesystem 		= {
		directories : require ( './configuration/file-system/directories' 	) ,
		files 		: require ( './configuration/file-system/files'			)
	} ,

	loaders 		= {
		css 		: require ( './configuration/build/loader-css' 			) ,
		jsx 		: require ( './configuration/build/loader-jsx' 			)
	} ,

	plugins 		= {
		extractor 	: require ( './configuration/build/plugin-extractor' 	) ,
		postcss 	: require ( './configuration/build/plugin-postcss' 		)
	};

module.exports 		= {
	entry 			: {
		application : filesystem.directories.application + '/' + filesystem.files.index
	} ,
	output			: configuration.output 		,
	resolve			: configuration.resolver 	,
	module			: {
		loaders 	: [
			loaders.css ,
			loaders.jsx
		]
	} ,
	postcss			: plugins.postcss , 
	plugins 		: [
		plugins.extractor
	]
};
