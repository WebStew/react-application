
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import Button 					from '../presentational/button.jsx';
import List 					from '../presentational/list.jsx';
import ListItem 				from '../presentational/list-item.jsx';
import actions					from '../../actions/timer.jsx';

/**
 * Timer results React component which displays a list of
 * timestamps from the timer store.
 */
class LapTimes extends Component {

	constructor () {

		super 							();
		this.reset = this.reset.bind 	( this 	);
	}

	/**
	 * Deletes all the timestamps.
	 */
	reset () {

		let { dispatch } = this.props;

		dispatch ( actions.reset ());
	}

	/**
	 * Renders all the timestamps from the timestamp store or no results if it is empty.
	 * @return {Object} Section element.
	 */
	render () {

		let timestamps 	= this.props.timer.timestamps;

		// There are no timestamps don't render the component
		// if ( Object.keys ( timestamps ).length === 0 ) {
		// 	return null;
		// }

		return (
			<section>
				<h2>Lap times</h2>
				<List
					items 		= { timestamps }
					description = 'Lap times'
				/>
				<Button
					className 	= 'btn btn-danger'
					type 		= 'button'
					disabled 	= { Object.keys ( timestamps ).length === 0 }
					value 		= 'Reset'
					onClick 	= { this.reset }
				/>
			</section>
		);
	}
};

/**
 * Connect this component to the timer store.
 */
export default connect (

	state => ({
		timer : state.timer
	})
) ( LapTimes );
