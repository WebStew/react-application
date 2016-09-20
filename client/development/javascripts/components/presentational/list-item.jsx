
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';

/**
 * React component that will display a single timestamp from the timestamp store.
 */
class ListItem extends Component {

	/**
	 * Renders a list item of a single entry from the timestamp store.
	 * @return {Object} List item element.
	 */
	render () {

		return (
			<li data-id={ this.props.id }>{ this.props.value }</li>
		);
	}
};

export default ListItem;
