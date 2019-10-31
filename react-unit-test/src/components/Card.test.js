import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card tests', () => {
    it('should be Hello Piotrek', () => {
        const wrapper = shallow(<Card name="Piotrek"/>);
        expect(wrapper.text()).toBe('Hello Piotrek');
    });

    it('should be Hello Pawel', () => {
        const wrapper = shallow(<Card name="Pawel"/>);
        expect(wrapper.text()).toBe('Hello Pawel');
    });
});
