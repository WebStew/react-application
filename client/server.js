
const express 		= require ( 'express' 	);
const path 			= require ( 'path' 		);
const http 			= require ( 'http' 		);
const port 			= process.env.PORT || 3000;
const application 	= express ();


var options = {
	host 	: 'eal-ci02.wiley.com' 	,
	method 	: 'GET' 				,
	port 	: 8080 					,
	path 	: '/view/WOL%202.0%20Anywhere%20Article/job/qaf_wol2_aa_deployment/api/json?pretty=true&depth=1'
};

// Serve static assets normally
application.use ( express.static ( __dirname + '/public' ));

// Handles all routes so you do not get a not found error
application.get ( '*' , function ( request , response ) {

	//response.setHeader('Content-Type', 'application/json');

	// http.request (
	// 	options ,
	// 	function ( res ) {

	// 		console.log( res );
	// 	//console.log('STATUS: ' + res.statusCode);
	// 	//console.log('HEADERS: ' + JSON.stringify(res.headers));
	// 	//res.setEncoding('utf8');


	// 	res.on( 'data', function (chunk) {
	// 		console.log('BODY: ' + chunk);
	// 		response.send ( 'WORKING' );
	// 		});
	// 	}
	// ).end();
	// .on('error', function(e) {

	// response.render ( options.host + options.path );
	// });


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
