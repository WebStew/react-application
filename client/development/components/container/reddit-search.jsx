
import React , 	{ Component 			} 	from 'react';
import 			{ render 				} 	from 'react-dom';
import 			{ connect 				} 	from 'react-redux';
import actions 								from 'actions/reddit';
import Button 								from 'components/presentational/button';

/**
 * Reddit React component
 */
class RedditSearch extends Component {

	constructor ( props ) {

		super 						( props );
		this.set = this.set.bind 	( this 	);
		this.get = this.get.bind 	( this 	);
	}

	set ( event ) {

		let value 			= event.target.value ,
			{ dispatch } 	= this.props;

		dispatch ( actions.set ( value ));
	}

	get () {


	    let { dispatch 	} = this.props ,
	    	{ reddit 	} = this.props ;

	    dispatch ( actions.fetch ( reddit.value ));
	}

	/**
	 * Renders the timer component.
	 * @return {Object} Section element.
	 */
	render () {

		//const { timer } = this.props;
		const { reddit } = this.props;

		return (
			<section>
				<h2>Search Test</h2>
				<div className='input-group'>

					<input
						onChange 	= { this.set }
						value 		= { reddit.value }
						type 		= 'text'
						className 	= 'form-control'
						placeholder = 'Search for...'
					/>

					<span className='input-group-btn'>

						<Button
							className 	= 'btn btn-info'
							type 		= 'button'
							value 		= 'Search'
							disabled 	= { ! reddit.value }
							onClick 	= { this.get }
						/>

					</span>
				</div>
			</section>
		);
	}
};

/**
 * Connect this component to the reddit store.
//  */
export default connect (

	state => ({
		reddit : state.reddit
	})
) ( RedditSearch );
