import React from 'react';
import MainComponent from '../components/MainComponent'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('RegisterForm', () => {
    it('should be defined', () => {
        expect(<MainComponent />).toBeDefined();
    });
    it("renders correctly", () => {
        const wrapper = shallow(
            <MainComponent />
        );
        expect(wrapper.exists()).toBe(true);
    });
});