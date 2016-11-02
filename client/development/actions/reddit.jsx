
import constants 	from 'constants/reddit.jsx';
import api 			from 'api/reddit.jsx';

const error = function ( value ) {

		return {
			type 	: constants.error 	,
			value
		};
	} ,

	receive = function ( value , data ) {

		return {
			reddits : data 				,
			type 	: constants.receive ,
			value
		};
	} ,

	request = function ( value ) {

		return {
			type 	: constants.request ,
			value
		};
	};


/**
 * Actions for the timer.
 * @type {Object}
 */
export default {

	fetch ( value ) {

		console.log ( 'FEATCHING' );

		return function ( dispatch ) {

			dispatch ( request ( value ));

			return api.get 	( value )
				.then ( function ( response ) {

					let reddits = {};

					response.data.data.children.forEach ( function ( value , index ) {

						reddits [ value.data.id ] = value.data;
					});

					return reddits;
				})
				.then 	( reddits 	=> dispatch ( receive 	( value , reddits 	)))
				.catch 	( error 	=> dispatch ( error 	( error 			)));
		}
	} ,

	set ( value ) {

		return {
			type 	: constants.set ,
			value
		};
	}
};
