
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import Button 					from '../presentational/button.jsx';
import ListItem 				from '../presentational/list-item.jsx';
import actions					from '../../actions/timer-view.jsx';

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

		let timestamps 	= this.props.timer.timestamps ,
			laptimes 	= [];

		// There are no timestamps don't render the component
		if ( Object.keys ( timestamps ).length === 0 ) {
			return null;
		}

		for ( let key in timestamps ) {
			laptimes.push ( <ListItem key={ key } id={timestamps [ key ].id } value={ timestamps [ key ].value } /> );
		}

		return (
			<section>
				<h2>Laptimes</h2>
				<ul>
					{ laptimes }
				</ul>
				<Button
					className 	= 'btn btn-danger'
					type 		= 'button'
					disabled 	= { Object.keys ( this.props.timer.timestamps ).length === 0 }
					value 		= 'Reset'
					onClick 	= { this.reset } />
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
