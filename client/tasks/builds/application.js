
const environment 	= process.env.ENVIROMENT || 'development' 				,
	shell 			= require ( 'shelljs' 								) 	,
	messages 		= require ( '../../configuration/build/messages' 	) 	,
	log 			= require ( '../../utilities/log' 					) 	,
	string 			= require ( '../../utilities/string' 				) 	,
	strings 		= {
		task 	: 'Build for Environment ' + environment 	, 
		off 	: string.setUCFirst ( messages.finished ) 	,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Build the front-end assests
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'webpack' );
log.end 	();
log.set 	( strings.off , strings.task , 'success' );
log.end 	();
