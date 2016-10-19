
import React , 	{ Component } 	from 'react';
import NavigationPrimary 		from 'components/container/navigation-primary';

/**
 * React controller view to handle the root page components.
 */
class Main extends Component {

	/**
	 * Renders the navigation and any child page components.
	 */
	render () {

		return (
			<div>
				<NavigationPrimary />
				<main
					className 	= 'container'
					role 		= 'main'>
					{ this.props.children }
				</main>
			</div>
		);
	}
};

export default Main;
