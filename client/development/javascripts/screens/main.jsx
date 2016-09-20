
import React , 	{ Component } 	from 'react';
import NavigationPrimary 		from '../components/container/navigation-primary.jsx';

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
				<div className='container'>
					{ this.props.children }
				</div>
			</div>
		);
	}
};

export default Main;
