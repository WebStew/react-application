	
var environment 	= process.env.ENVIROMENT || 'development',
	environments 	= {
		environment : environment 		, 
		development : {
			host : 'http://localhost' 	,
			port : 3000
		}
	};

module.exports  =  environments [ environment ];
