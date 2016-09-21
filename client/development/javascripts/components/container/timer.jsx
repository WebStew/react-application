
import React , 	{ Component 			} 	from 'react';
import 			{ render 				} 	from 'react-dom';
import 			{ connect 				} 	from 'react-redux';
import Button 								from '../presentational/button.jsx';
import actions 								from '../../actions/timer.jsx';

/**
 * Timer React component
 */
class Timer extends Component {

	/**
	 * Shortcut some event handlers on instantiatoin.
	 */
	constructor ( props ) {

		super 							( props );
		this.save 	= this.save.bind 	( this 	);
		this.start 	= this.start.bind 	( this 	);
		this.stop 	= this.stop.bind 	( this 	);
		this.reset 	= this.reset.bind 	( this 	);
	}

	/**
	 * Clears any timing intevals when the component unmounts.
	 */
	componentWillUnmount () {

		let { dispatch } 	= this.props;
		let value 			= this.props.timer.value;

		dispatch 		( actions.off 			());
		dispatch 		( actions.set ( value 	));
		clearInterval 	( this.interval 		);
	}

	/**
	 * Increments the timer state by 1.
	 */
	tick () {

		let { dispatch } 	= this.props;
		let value 			= this.props.timer.value + 1;

		// I don't think we should be dispatching here on interval?
		// Potentially creates a lot of dispatched actions that need to go through
		// all the reducers
		dispatch ( actions.set ( value ));
	}

	/**
	 * Resets the internal state timer to zero.
	 */
	reset () {

		let { dispatch } = this.props;

		dispatch ( actions.set ( 0 ));
	}

	/**
	 * Saves a laptime.
	 */
	save () {

		let { dispatch } 	= this.props;
		let value 			= this.props.timer.value;

		dispatch ( actions.save ( value ));
	}

	/**
	 * Starts a timing interval from a user action and updates the internal timing state
	 * to true.
	 */
	start () {

		let { dispatch } = this.props;

		this.interval = setInterval (
			this.tick.bind ( this ) ,
			this.props.interval
		);
		dispatch ( actions.on ());
	}

	/**
	 * Clears the timing interval from a user action, calls the off action for the component and updates the internal timing state
	 * to false.
	 */
	stop () {

		let { dispatch } = this.props;

		clearInterval 	( this.interval );
		dispatch 		( actions.off ());
	}

	/**
	 * Renders the timer component.
	 * @return {Object} Section element.
	 */
	render () {

		const { timer } = this.props;

		return (
			<section>
				<p>Ellapse time : { timer.value }</p>
				<div
					className 	= 'btn-group'
					role 		= 'group'
					aria-label 	= 'Stopwatch controls'>

					<Button
						className 	= 'btn btn-success'
						type 		= 'button'
						value 		= 'Start'
						disabled 	= { timer.on }
						onClick 	= { this.start }
					/>

					<Button
						className 	= 'btn btn-info'
						type 		= 'button'
						disabled 	= { timer.off }
						value 		= 'Laptime'
						onClick 	= { this.save }
					/>

					<Button
						className 	= 'btn btn-warning'
						type 		= 'button'
						value 		= 'Stop'
						disabled 	= { timer.off }
						onClick 	= { this.stop }
					/>

					<Button
						className 	= 'btn btn-danger'
						type 		= 'button'
						disabled 	= { timer.on || timer.value === 0 }
						value 		= 'Reset'
						onClick 	= { this.reset }
					/>
				</div>
			</section>
		);
	}
};

/**
 * Sets default prop values if they are not defined on the component.
 * @return {Object} Default property values.
 */
Timer.defaultProps = {
	interval : 1000
};

/**
 * Connect this component to the timer store.
 */
export default connect (

	state => ({
		timer : state.timer
	})
) ( Timer );
