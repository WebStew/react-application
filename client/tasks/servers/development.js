
const shell 	= require ( 'shelljs' 								) ,
	messages 	= require ( '../../configuration/build/messages' 	) ,
	log 		= require ( '../../utilities/log' 					) ,
	string 		= require ( '../../utilities/string' 				) ,
	strings 	= {
		task 	: 'Development Server' ,
		on 		: string.setUCFirst ( messages.started 	)
	};

// Start the development server
log.set 	( strings.on , strings.task );
log.end 	();
shell.exec 	( 'webpack-dev-server --hot --inline --progress --colors --watch --display-error-details --display-cached --content-base ./public' );
