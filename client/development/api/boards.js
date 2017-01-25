
import * as ajax from 'axios';

const api = {
		domain 	: ' http://private-c05f7-snapimock.apiary-mock.com' ,
		boards 	: '/snapi/boards'
	}

export default {
	
	get ( id ) {

		let url = api.domain + api.boards;

		url 	+= id ? id : '';

		return ajax.get ( url );

	}
};
