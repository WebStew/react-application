
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';
import Button 					from './button.jsx';
import actions 					from '../actions/timer.jsx';

/**
 * Timer React component
 */
class Timer extends Component {

	/**
	 * Set the state of the component.
	 */
	constructor () {

		super ()

		this.state = {
			timer 	: 0 ,
			timing 	: false
		};
	}

	/**
	 * Increments the timer state by 1.
	 */
	tick () {

		this.setState ({
			timer : this.state.timer + 1
		});
	}

	/**
	 * Clears any timing intevals when the component unmounts.
	 */
	componentWillUnmount () {

		clearInterval ( this.interval );
	}

	/**
	 * Starts a timing interval from a user action and updates the internal timing state
	 * to true.
	 */
	on () {

		this.interval = setInterval ( this.tick.bind ( this ) , 1 );

		this.setState({
			timing : true
		});
	}

	/**
	 * Clears the timing interval from a user action, calls the off action for the component and updates the internal timing state
	 * to false.
	 */
	off () {

		clearInterval ( this.interval );

		this.setState ({
			timing : false
		});

		actions.off ( this.state.timer );
	}

	/**
	 * Resets the internal state timer to zero.
	 */
	reset () {

		this.setState ({
			timer : 0
		});
	}

	/**
	 * Renders the timer component.
	 * @return {Object} Section element.
	 */
	render () {

		return (

			<section>
				<p>Ellapse time : { this.state.timer }</p>
				<div
					className 	= 'btn-group'
					role 		= 'group'
					aria-label 	= 'Stopwatch controls'>

					<Button
						className 	= "btn btn-success"
						type 		= "button"
						disabled 	= { this.state.timing }
						value 		= "Start"
						onClick 	= { this.on.bind ( this )} />

					<Button
						className 	= "btn btn-primary"
						type 		= "button"
						disabled 	= { ! this.state.timing }
						value 		= "Stop"
						onClick 	= { this.off.bind ( this )} />

					<Button
						className 	= "btn btn-danger"
						type 		= "button"
						disabled 	= { this.state.timing || this.state.timer === 0 }
						value 		= "Reset"
						onClick 	= { this.reset.bind ( this )} />

				</div>
			</section>
		);
	}
}

export default Timer
