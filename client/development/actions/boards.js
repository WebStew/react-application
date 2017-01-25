
import constants 	from 'constants/boards';
import api 			from 'api/boards';

const error = function ( value ) {

		return {
			type 	: constants.error 	,
			value
		};
	} ,

	receive = function ( value , data ) {

		return {
			boards 	: data 				,
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
 * Actions for the snAPI.
 * @type {Object}
 */
export default {

	get ( value ) {

		return function ( dispatch ) {

			dispatch ( request ( value ));

			return api.get ( value ).then ( function ( response ) {

				return response.data;
			})
			.then 	( boards 	=> dispatch ( receive 	( value , boards 	)))
			.catch 	( data 		=> dispatch ( error 	( data 				)));
		}
	} ,

	set ( value ) {

		return {
			type 	: constants.set ,
			value
		};
	}
};
