
const shell 	= require ( 'shelljs' 								) ,
	messages 	= require ( '../../configuration/build/messages' 	) ,
	log 		= require ( '../../utilities/log' 					) ,
	string 		= require ( '../../utilities/string' 				) ,
	strings 	= {
		task 	: 'Test Server' ,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Start the test server
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'nodemon server.js' );
