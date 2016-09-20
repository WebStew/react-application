
import React , 	{ Component } 	from 'react';
import 			{ Link 		} 	from 'react-router';

/**
 * React section controller view.
 */
class Section extends Component {

	/**
	 * Renders the React section controller view and any components.
	 * @return {Object} Div element.
	 */
	render () {

		return (
			<div>
				<h1>Section</h1>
				<div className='list-group'>

					<Link
						to 			= { '/section/sub-section' }
						className 	= 'list-group-item'>
						Sub section
					</Link>
				</div>
			</div>
		);
	}
};

export default Section;
