
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
			<nav className='navbar navbar-default' role='navigation' aria-labelledby='Primary site navigation'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<Link className='navbar-brand' to='/'>Logo image</Link>
					</div>
					<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
						<ul className='nav navbar-nav'>
                            <li><Link activeClassName='active' to='/'>Home</Link></li>
                            <li><Link activeClassName='active' to='/section'>Section</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavigationPrimary
