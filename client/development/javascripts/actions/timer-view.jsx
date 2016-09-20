
import constants 	from '../constants/timer.jsx';

/**
 * Actions for the timer.
 * @type {Object}
 */
export default {

	off () {

		return {
			type 	: constants.off ,
			off 	: true 			,
			on 		: false
		};
	} ,

	on () {

		return {
			type 	: constants.on 	,
			off 	: false 		,
			on 		: true
		};
	} ,

	/**
	 * Dispatches the timer has stopped action.
	 * @param  {Number} time The value of timer when it stopped.
	 */
	reset () {

		return {
			type : constants.reset
		};
	} ,

	/**
	 * Dispatches the timer has stopped action.
	 * @param  {Number} time The value of timer when it stopped.
	 */
	save ( time ) {

		return {
			type 	: constants.save ,
			value 	: time
		};
	} ,

	/**
	 * Dispatches the timer has stopped action.
	 * @param  {Number} time The value of timer when it stopped.
	 */
	set ( time ) {

		return {
			type 	: constants.set ,
			value 	: time
		};
	}
};
