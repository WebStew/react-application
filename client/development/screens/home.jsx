
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import Timer 					from 'components/container/timer';
import LapTimes 				from 'components/container/lap-times';

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
			<section>
				<h1>Home page</h1>
				<p>Including the stopwatch component</p>

				<Timer interval='10' 	/>
				<LapTimes 				/>
			</section>
		);
	}
};

export default Home;
