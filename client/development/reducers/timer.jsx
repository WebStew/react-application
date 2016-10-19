
import constants from 'constants/timer';

let _timestamps = {};

 export default function ( state = {
		off 		: true 			,
		on 			: false 		,
		timestamps 	: _timestamps 	,
		value 		: 0
	} , action ) {

	switch ( action.type ) {

		case constants.off :

			return Object.assign (
				{} 		,
				state 	,
				{
					off : true 	,
					on 	: false
      			}
      		);
		break;

		case constants.on :

			return Object.assign (
				{} 		,
				state 	,
				{
					off : false ,
					on 	: true
    	  		}
    	  	);
		break;

		case constants.reset :

			_timestamps = {};

			return Object.assign (
				{} 		,
				state 	,
				{
					timestamps 	: _timestamps
      			}
      		);
		break;

		case constants.save :

			let id = ( + new Date () + Math.floor ( Math.random () * 999999 )).toString ( 36 );

			_timestamps [ id ] = {
				id 		: id ,
				value 	: action.value
			};

			return Object.assign (
				{} 		,
				state 	,
				{
					value 		: action.value 	,
					timestamps 	: _timestamps
      			}
      		);
		break;

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				{
					value : action.value
      			}
      		);
		break;

		default :
			return state;
	}
};


