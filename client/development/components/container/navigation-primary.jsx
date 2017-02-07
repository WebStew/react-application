
import React, 	{ Component } from 'react';
import 			{ Link 		} from 'react-router';

/**
 * React controller view to handle the root page components.
 */
class NavigationPrimary extends Component {

	/**
	 * Renders the navigation and any child page components.
	 */
	render () {

		return (
			<nav
				role 			= 'navigation'
				aria-labelledby = 'Main Navigation'>
				<ul>
					<li>
						<Link
							activeClassName = 'navigation__link--active'
							to 				= '/'>
							Home
						</Link>
					</li>
					<li>
						<Link
							activeClassName = 'navigation__link--active'
							to 				= '/boards'>
							Boards
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
};

export default NavigationPrimary;
