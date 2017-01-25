
import constants 	from 'constants/browser';

/**
 * Actions for the browser.
 * @type {Object}
 */
export default {

	/**
	 * Dispatches the browser resize action.
	 * @param  {Object} dimensions 	Height and width properties of the current 
	 * 								window size
	 */
	resize ( dimensions ) {

		return {
			type : constants.resize ,
			dimensions
		};
	}
};
