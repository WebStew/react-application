
import constants 	from 'constants/boards';
import api 			from 'api/boards';

const error = function () {

		return {
			type 	: constants.error
		};
	} ,

	receive = function ( data ) {

		return {
			boards 	: data 				,
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

	get () {

		return function ( dispatch ) {

			dispatch ( request ());

			return api.get ().then ( function ( response ) {

				return response.data;
			})
			.then 	( boards 	=> dispatch ( receive 	( boards 	)))
			.catch 	( data 		=> dispatch ( error 	( data 		)));
		}
	}
};
