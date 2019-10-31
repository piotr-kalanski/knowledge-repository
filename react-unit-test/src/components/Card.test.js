import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

it('test', () => {
    const wrapper = shallow(<Card />);
    
    expect(wrapper.text()).to.equal('Card');
});
