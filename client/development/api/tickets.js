
import * as ajax 	from 'axios';
import environment 	from 'configuration/environment';

const api = {
		domain 		: environment.snapi ,
		endpoint 	: '/snapi/tickets'
	}

export default {
	
	get ( id ) {

		let url = api.domain + api.endpoint;

		url 	+= id ? '/' + id : '';

		return ajax.get ( url );

	}
};
