
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';

/**
 * React component that will display a single timestamp from the timestamp store.
 */
class TimerResult extends Component {

	/**
	 * Renders a list item of a single entry from the timestamp store.
	 * @return {Object} List item element.
	 */
	render () {

		return (
			<li data-id={ this.props.timestamp.id }>{ this.props.timestamp.value }</li>
		);
	}

}

export default TimerResult
