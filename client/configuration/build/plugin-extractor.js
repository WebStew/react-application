
var Extractor = require ( 'extract-text-webpack-plugin' );

module.exports 	= new Extractor ( 
	'[name].css' , 
	{
		allChunks : true
	}
);