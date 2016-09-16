
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';
import store					from '../stores/timestamps.jsx';
import TimerResult				from './timer-result.jsx';

/**
 * Gets the time results object store
 * @return {Object} The timestamps from the timer store.
 */
const getTimestamps = function () {

  	return {
    	timestamps: store.get ()
  	};
}

/**
 * Timer results React component which displays a list of
 * timestamps from the timer store.
 */
class TimerResults extends Component {

	/**
	 * Bind to the timer store and set the component state when
	 * the component mounts
	 */
	componentWillMount () {

    	store.change 	( this.update.bind 	( this 	));
		this.setState 	( getTimestamps 	());
	}

	/**
	 * Unbind to the timer store when the component unmounts.
	 */
	componentWillUnmount () {

		store.off ( this.update );
	}

	/**
	 * Updates the state with any changes from the timestamp store.
	 */
	update () {

		this.setState ( getTimestamps ());
	}

	/**
	 * Renders all the timestamps from the timestamp store or no results if it is empty.
	 * @return {Object} Section element.
	 */
	render () {

		let timestamps 	= this.state.timestamps ,
			results 	= [];

		if ( Object.keys ( this.state.timestamps ).length > 0 ) {
			for ( let key in timestamps ) {
				results.push ( <TimerResult key={ key } timestamp={ timestamps [ key ]} /> );
			}
		}

		else {
			results.push ( <TimerResult key='0' timestamp={{ value: 'NO TIMES AVAILABLE.' }} /> );
		}

		return (
			<section>
				<h2>Timestamps</h2>
				<ul>
					{ results }
				</ul>
			</section>
		);
	}
}

export default TimerResults
