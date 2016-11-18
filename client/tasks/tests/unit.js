
const shell 	= require ( 'shelljs' 								) ,
	messages 	= require ( '../../configuration/build/messages' 	) ,
	log 		= require ( '../../utilities/log' 					) ,
	string 		= require ( '../../utilities/string' 				) ,
	strings 	= {
		task 	: 'Running Unit Test Suite' 				, 
		off 	: string.setUCFirst ( messages.finished ) 	,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Run the unit tests
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'mocha tests/unit/helpers/browser.js tests/unit/specs/*.spec.js' );
log.end 	();
log.set 	( strings.off , strings.task , 'success' );
log.end 	();
