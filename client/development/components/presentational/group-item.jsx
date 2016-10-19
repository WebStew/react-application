
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';

/**
 * React component that will display a single timestamp from the timestamp store.
 */
class GroupItem extends Component {

	/**
	 * Renders a list item of a single entry from the timestamp store.
	 * @return {Object} List item element.
	 */
	render () {

		return (
			<a 	href 		= { this.props.url }
				className 	= 'list-group-item'
				target 		= '_blank'>
				<h4 className = 'list-group-item-heading'>
					{ this.props.title }
				</h4>
				<p className = 'list-group-item-text'>
					{ this.props.domain }
				</p>
			</a>
		);
	}
};

export default GroupItem;
