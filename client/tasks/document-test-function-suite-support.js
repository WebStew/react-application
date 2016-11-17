
const shell 	= require ( 'shelljs' 							);
const messages 	= require ( '../configuration/build/messages' 	);
const log 		= require ( '../utilities/log' 					);
const string 	= require ( '../utilities/string' 				);
const strings 	= {
	clean 		: 'Cleaning Test Suite Support Documentation' 	,
	generate 	: 'Generating Test Suite Support Documentation' , 
	off 		: string.setUCFirst ( messages.finished ) 		,
	on 			: string.setUCFirst ( messages.started 	)
};

// Clean the test suite folder
log.set 	( strings.on , strings.clean 								); 
shell.exec 	( 'rimraf ./documentation/tests/functional/suite/support'	);
log.set 	( strings.off , strings.clean , 'success' 					);
log.end 	();

// Generate the test suite documentation for steps
log.set 	( strings.on , strings.generate );
log.break 	();
shell.exec 	( 'jsdoc -c ./configuration/documentation/tests/functional/suite/jsdoc-support.json' );
log.break 	();
log.set 	( strings.off , strings.generate , 'success' );
log.end 	();
