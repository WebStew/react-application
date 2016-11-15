
var path = require ( 'path' );

module.exports 		= {
	application 	: path.resolve ( __dirname , '../../development' 	) ,
	build 			: path.resolve ( __dirname , '../../public' 		) ,
	configuration 	: path.resolve ( __dirname , '../../configuration' 	) ,
	tests 			: {
		screenshots : path.resolve ( __dirname , '../../tests/functional/screenshots' 	) ,
		functional 	: {
			reports : path.resolve ( __dirname , '../../tests/functional/reports' 		) ,
			specs 	: path.resolve ( __dirname , '../../tests/functional/specs' 		) ,
			steps 	: path.resolve ( __dirname , '../../tests/functional/steps' 		)
		}
	}
};
