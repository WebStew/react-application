
const express 		= require ( 'express' 	);
const path 			= require ( 'path' 		);
const http 			= require ( 'http' 		);
const port 			= process.env.PORT || 3000;
const application 	= express ();

// Serve static assets normally
application.use ( express.static ( __dirname + '/public' 		));

application.get ( '/styleguide' , function ( request , response ) {

	response.sendFile 	( 
		path.resolve 	( 
			__dirname 	, 
			'public' 	, 
			'styleguide.html' 
		)
	);

});

// Handles all routes so you do not get a not found error
application.get ( '*' , function ( request , response ) {

	response.sendFile 	( 
		path.resolve 	( 
			__dirname 	, 
			'public' 	, 
			'index.html' 
		)
	);

});

application.listen 	( port 								);
console.log 		( 'Server started on port ' + port 	);
