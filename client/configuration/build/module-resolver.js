
var directories = require ( '../file-system/directories' );

module.exports 	= {
	modules 	: [
		directories.application ,
		'node_modules'
	] ,
	extensions 	: [
		'.css' 	,
		'.js' 	,
		'.jsx'
	]
};
