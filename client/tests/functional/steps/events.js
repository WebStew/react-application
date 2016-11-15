
import click 	from '../support/events/click';
import drag 	from '../support/events/drag';
import keypress from '../support/events/keypress';

/** 
 * @module 		Events
 * @description Event actions and steps to build feature files with
 */
module.exports = function () {

	/**
	 * @function 	click
	 * @description Click on an element
	 * @param 		{String} event 		The event to trigger.
	 * 									Must be "click" or "doubleClick"
	 * @param 		{String} element 	The type of element to click on.
	 * 									Must be "link", "button" or "element"
	 * @param 		{String} selector 	The element selector to test against
	 * @example 	Given | When | Then I "{event}" on the "{type}" "{selector}"
	 */
	this.Given (
		/^I "(click|double click)" on the "(link|button|element)" "([^"]*)?"$/ ,
		click
	);

	/**
	 * @function 	drag
	 * @description Drag an element to another element
	 * @param 		{String} selector 	The element selector to drag
	 * @param 		{String} target 	The target element to drag the selector to
	 * @example 	Given | When | Then I drag element "{selector}" to element "{target}"
	 */
	this.Given (
		/^I drag element "([^"]*)?" to element "([^"]*)?"$/ ,
		drag
	);


	/**
	 * @function 	keypress
	 * @description Press a key on the keyboard
	 * @param 		{String} keycode The keycode of the keyboard button to press
	 * @example 	Given | When | Then I press "{keycode}"
	 */
	this.Given (
		/^I press "([^"]*)?"$/ ,
		keypress
	);

};