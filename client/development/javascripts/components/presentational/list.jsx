
import React , 	{ Component } 	from 'react';
import 			{ render } 		from 'react-dom';
import ListItem 				from './list-item.jsx';

/**
 * React component that will display a single timestamp from the timestamp store.
 */
class List extends Component {

	/**
	 * Renders a list item of a single entry from the timestamp store.
	 * @return {Object} List item element.
	 */
	render () {

		let items 	= this.props.items ,
			results = [];

		if ( Object.keys ( items ).length === 0 ) {
			results.push (
				<ListItem
					key 	= 'no-items'
					value 	= { this.props.description + ' unavailable.' }
				/>
			);
		}

		else {
			for ( let key in items ) {
				results.push (
					<ListItem
						key 	= { key 				}
						id 		= { items [ key ].id 	}
						value 	= { items [ key ].value }
					/>
				);
			}
		}

		return (
			<ul className = { this.props.className }>
				{ results }
			</ul>
		);
	}
};

/**
 * Component property validation
 * @type {Object}
 */
List.defaultProps 	= {
	description : 'Items'
};

export default List;
