
const environments = {

		development : {
			snapi 	: 'http://private-c05f7-snapimock.apiary-mock.com'
		}
	} ,

	environment 	= window.ENVIRONMENT || 'development';

export default environments [ environment ];
