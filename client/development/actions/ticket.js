
import constants 	from 'constants/ticket';
import api 			from 'api/ticket';

const error = function () {

		return {
			type 	: constants.error
		};
	} ,

	receive = function ( data ) {

		return {
			ticket 	: data 				,
			type 	: constants.receive
		};
	} ,

	request = function () {

		return {
			type 	: constants.request
		};
	};


/**
 * Actions for the snAPI.
 * @type {Object}
 */
export default {

	get ( id ) {

		return function ( dispatch ) {

			dispatch ( request ());

			return api.get ( id ).then ( function ( response ) {

				return response.data;
			})
			.then 	( data 	=> dispatch ( receive 	( data )))
			.catch 	( data 	=> dispatch ( error 	( data )));
		}
	}
};
