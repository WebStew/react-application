
import React , { Component } from 'react';

/**
 * React button component.
 */
class Button extends Component {

	/**
	 * Renders a React Button component
	 * @return {Object} Button element.
	 */
	render () {

		return (
			<button { ...this.props }>
				{ this.props.value }
			</button>
		)
	}
}

export default Button;
