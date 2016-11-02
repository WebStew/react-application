
import React , 	{ Component } 	from 'react';
import 			{ Link 		} 	from 'react-router';
import Canvas 					from 'components/container/canvas';

/**
 * React sub section controller view.
 */
class SubSection extends Component {

	constructor () {

		super ();

		this.alert = this.alert.bind ( this );
	}

	alert () {

		alert ( 'Boom' );
	}

	/**
	 * Renders the seub section and any child components.
	 * @return {Object} Div element.
	 */
	render () {

		return (
			<section>
				<h1>Sub Section</h1>
				<Canvas 
					width = '100%' 
					onClick = { this.alert }	
				/>
				<div>
					<Link
						className 	= 'btn btn-default'
						to 			= '/section'>
						Go back to section
					</Link>
				</div>
			</section>
		);
	}
};

export default SubSection;
