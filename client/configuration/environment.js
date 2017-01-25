	
var environment 	= process.env.ENVIROMENT || 'development',
	environments 	= {
		environment : environment , 
		development : {
			debug 		: true 					,
			host 		: 'http://localhost' 	,
			optimise 	: false 				,
			port 		: 3000
		}
	};

module.exports  =  environments [ environment ];
