
import * as ajax from 'axios';

const api = {
		domain 	: 'http://www.reddit.com' ,
		reddits : '/r/'
	}

export default {

	get ( value ) {
		return ajax.get ( api.domain + api.reddits + value + '.json' );
	}
};
