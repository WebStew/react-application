
import assign 			from 'object-assign';
import { EventEmitter } from 'events';
import actions 			from '../actions/timer.jsx';
import constants 		from '../constants/timer.jsx';
import dispatcher 		from '../dispatchers/timer.jsx';

let _timestamps = {};

const crud = {

	create ( time ) {

		// Hand waving here -- not showing how this interacts with XHR or persistent
		// server-side storage.
		// Using the current timestamp + random number in place of a real id.
		let id = ( + new Date () + Math.floor ( Math.random () * 999999 )).toString ( 36 );

		_timestamps [ id ] = {
			id 		: id ,
			value 	: time
		};
	} ,

	delete () {

		_timestamps = {};
	}
};

const store = assign ({

	get () {

		return _timestamps;
	} ,

	broadcast () {

		this.emit ( constants.change );
	} ,

	change ( callback ) {

		this.on ( constants.change , callback );
	} ,

	off ( callback ) {

		this.removeListener ( constants.change , callback );
	}

} , EventEmitter.prototype , {});

// Register callback to handle all updates
dispatcher.register ( function ( action ) {

	switch ( action.actionType ) {

		case constants.stop :
			crud.create 	( action.value );
			store.broadcast ();

		break;

		case constants.reset :
			crud.delete 	();
			store.broadcast ();

		break;
	}

});

export default store;
