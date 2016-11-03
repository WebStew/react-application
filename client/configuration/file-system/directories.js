
var path = require ( 'path' );

module.exports 		= {
	application 	: path.resolve ( __dirname , '../../development' 	) ,
	build 			: path.resolve ( __dirname , '../../public' 		) ,
	configuration 	: path.resolve ( __dirname , '../../configuration' 	)
};
