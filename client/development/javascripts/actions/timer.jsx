
import constants 	from '../constants/timer.jsx';

/**
 * Actions for the timer.
 * @type {Object}
 */
export default {

	off () {

		return {
			type 	: constants.off
		};
	} ,

	on () {

		return {
			type 	: constants.on
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
	save ( value ) {

		return {
			type 	: constants.save ,
			value
		};
	} ,

	/**
	 * Dispatches the timer has stopped action.
	 * @param  {Number} time The value of timer when it stopped.
	 */
	set ( value ) {

		return {
			type 	: constants.set ,
			value
		};
	}
};
