
import React , 	{ Component } from 'react';
import 			{ Link 		} from 'react-router';

/**
 * React sub section controller view.
 */
class SubSection extends Component {

	/**
	 * Renders the seub section and any child components.
	 * @return {Object} Div element.
	 */
	render () {

		return (
			<section>
				<h1>Sub Section</h1>

				<Link
					className 	= 'btn btn-default'
					to 			= '/section'>
					Go back to section
				</Link>
			</section>
		);
	}
};

export default SubSection;
