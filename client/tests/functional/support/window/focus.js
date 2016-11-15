
/**
 * @module 		window/focus
 * @description Focus the last opened window
 * @param 		{String} 	type Type of object to close (window or tab)
 * @param 		{Function} 	done Function to execute when finished
 */
module.exports = (
	type , 
	done
) => {

	/**
	 * @description The last opened window
	 * @type 		{Object}
	 */
	const last = browser.windowHandles ().value.slice ( -1 ) [ 0 ];

	browser.window 	( last );
	done ();

};
