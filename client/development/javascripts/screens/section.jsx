
import React , 	{ Component } 	from 'react';
import 			{ Link 		} 	from 'react-router';
import RedditSearch 			from '../components/container/reddit-search.jsx';
import Reddits 					from '../components/container/reddits.jsx';

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
			<section>
				<h1>Section</h1>
				<Link
					to 			= { '/section/sub-section' }
					className 	= 'btn btn-default'>
					Sub section
				</Link>
				<RedditSearch 	/>
				<Reddits 		/>
			</section>
		);
	}
};

export default Section;
