
import React 				from 'react';
import {  mount , shallow } from 'enzyme';
import chai , { expect } 	from 'chai';
import chaiEnzyme 			from 'chai-enzyme';
import Button 				from '../../../development/components/presentational/button.jsx';

chai.use ( chaiEnzyme ());

describe ( '<Button />' , () => {

	it ( 'should have an correct classname' , () => {

		const wrapper = shallow (
			<Button 
				className = 'test-class'
			/> 
		);

		expect ( wrapper.find( 'button' )).to.have.className ( 'test-class' );

	});
});