
import constants 	from '../constants/reddit.jsx';

/**
 * Actions for the timer.
 * @type {Object}
 */
export default {

	error ( error ) {

		return {
			type 	: constants.error 	,
			value 	: error
		};
	}

	receive ( reddit , data ) {

		return {
			date 	: Date.now () 		,
			reddits : data 				,
			type 	: constants.receive ,
			value 	: reddit
		};
	}

	request ( reddit ) {

		return {
			type 	: constants.request ,
			value 	: reddit
		};
	}

	select ( reddit ) {

		return {
			type 	: constants.select ,
			value 	: reddit
		};
	}
};
