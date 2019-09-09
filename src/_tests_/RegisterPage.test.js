import React from 'react';
import RegisterPage from '../components/screens/registerPage/RegisterPage'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('RegisterForm', ()=>{
    it('should be defined', ()=>{
        expect(<RegisterPage/>).toBeDefined();
    });
    it("renders correctly", () => {
        const wrapper = shallow(
            <RegisterPage />
        );
        expect(wrapper.exists()).toBe(true);
    });
});