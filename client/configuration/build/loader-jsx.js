
var directories = require ( '../file-system/directories' );

module.exports 	= {
	test 		: /\.jsx?/ 					,
	include 	: directories.application 	,
	exclude 	: /node_modules/ 			,
	loader 		: 'babel-loader' 			,
	query 		: {
		presets : [
			'es2015' ,
			'react'
		]
	}
};