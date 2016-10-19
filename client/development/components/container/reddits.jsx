
import React , 	{ Component } 	from 'react';
import 			{ render 	} 	from 'react-dom';
import 			{ connect 	} 	from 'react-redux';
import Button 					from 'components/presentational/button';
import List 					from 'components/presentational/list';
import GroupItem 				from 'components/presentational/group-item';
import actions					from 'actions/reddit';

/**
 * Timer results React component which displays a list of
 * timestamps from the timer store.
 */
class Reddits extends Component {

	constructor () {

		super ();
		//this.reset = this.reset.bind 	( this 	);
	}

	/**
	 * Deletes all the timestamps.
	 */
	// reset () {

	// 	let { dispatch } = this.props;

	// 	dispatch ( actions.reset ());
	// }

	/**
	 * Renders all the timestamps from the timestamp store or no results if it is empty.
	 * @return {Object} Section element.
	 */
	render () {

		let { reddit } 	= this.props 						,
			reddits 	= reddit.reddits [ reddit.value ] 	,
			results 	= [] 								;

		// There are no Reddits don't render the component
		if ( ! reddits || Object.keys ( reddits ).length === 0 ) {
			return null;
		}

		for ( let key in reddits ) {

			results.push (
				<GroupItem
					key 		= { key 						}
					thumbnail 	= { reddits [ key ].thumbnail 	}
					title 		= { reddits [ key ].title 		}
					url 		= { reddits [ key ].url 		}
				/>
			);
		}

		return (
			<section>
				<h2>Reddits for { reddit.value }</h2>
				<div className	= 'list-group'>
					{ results }
				</div>
			</section>
		);
	}
};

/**
 * Connect this component to the timer store.
 */
export default connect (

	state => ({
		reddit : state.reddit
	})
) ( Reddits );
