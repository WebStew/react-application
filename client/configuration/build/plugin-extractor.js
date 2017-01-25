
var Extractor = require ( 'extract-text-webpack-plugin' );

module.exports 	= new Extractor ({
	filename 	: '[name].css' 	,
	disable 	: false 		,
	allChunks 	: true
});
