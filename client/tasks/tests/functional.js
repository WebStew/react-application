
const shell 	= require ( 'shelljs' 								) ,
	messages 	= require ( '../../configuration/build/messages' 	) ,
	log 		= require ( '../../utilities/log' 					) ,
	string 		= require ( '../../utilities/string' 				) ,
	strings 	= {
		task 	: 'Running Functional Test Suite' 			, 
		off 	: string.setUCFirst ( messages.finished ) 	,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Run the functional tests
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'wdio webdriverio.js' );
log.end 	();
log.set 	( strings.off , strings.task , 'success' );
log.end 	();
