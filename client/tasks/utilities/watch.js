
const shell 	= require ( 'shelljs' 								) ,
	messages 	= require ( '../../configuration/build/messages' 	) ,
	log 		= require ( '../../utilities/log' 					) ,
	string 		= require ( '../../utilities/string' 				) ,
	strings 	= {
		task 	: 'Watch Service' 							, 
		off 	: string.setUCFirst ( messages.finished ) 	,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Start the development watch service
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'webpack -d --watch' );
