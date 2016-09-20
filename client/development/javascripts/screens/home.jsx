
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import Timer 					from '../components/container/timer.jsx';
import LapTimes 				from '../components/container/lap-times.jsx';

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

				<Timer interval='1' />
				<LapTimes 			/>
			</div>
		);
	}
};

export default Home;
