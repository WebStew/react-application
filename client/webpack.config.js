
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
		file 		: require ( './configuration/build/loader-file' 		) ,
		jsx 		: require ( './configuration/build/loader-jsx' 			)
	} ,

	plugins 		= {
		extractor 	: require ( './configuration/build/plugin-extractor' 	) ,
		postcss 	: require ( './configuration/build/plugin-postcss' 		)
	} ,
	
	servers 		= {
		development : require ( './configuration/build/server-development' 	)
	};

module.exports 		= {
	entry 			: {
		application : filesystem.directories.application + '/' + filesystem.files.index
	} ,
	output			: configuration.output 		,

	devServer 		: servers.development 		,

	resolve			: configuration.resolver 	,

	module			: {

		rules : [
			loaders.jsx ,
			loaders.css ,
			loaders.file
		]
	} ,

	plugins 		: [
		plugins.postcss 	,
		plugins.extractor
	]
};
