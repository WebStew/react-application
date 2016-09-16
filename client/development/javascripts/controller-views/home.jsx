
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';
import Timer 					from '../components/timer.jsx';
import TimerResults 			from '../components/timer-results.jsx';

/**
 * React home page controller view.
 */
class Home extends Component {

	/**
	 * Renders the home page with any child components.
	 * @return {Object} Div element.
	 */
	render () {

		return (
			<div>
				<h1>Home page</h1>
				<p>Including the stopwatch component</p>
				<Timer 			/>
				<TimerResults 	/>
			</div>
		);
	}
}

export default Home
