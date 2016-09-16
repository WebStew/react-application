
import dispatcher 	from '../dispatchers/timer.jsx';
import constants 	from '../constants/timer.jsx';

/**
 * Actions for the timer.
 * @type {Object}
 */
const actions = {

	/**
	 * Dispatches the timer has stopped action.
	 * @param  {Number} time The value of timer when it stopped.
	 */
	off ( time ) {

		dispatcher.dispatch ({
			actionType 	: constants.stop ,
			value 		: time
		});
	}

};

export default actions;
