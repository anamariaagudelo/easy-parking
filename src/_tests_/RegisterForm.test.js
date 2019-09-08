import React from 'react';
import RegisterForm from '../components/screens/registerPage/RegisterForm'
import shallow from 'enzyme-adapter-react-15';

describe('RegisterForm', ()=>{
    it('should be defined', ()=>{
        expect(RegisterForm).toBeDefined();
    });
    it('should render correctly', ()=>{
        const tree = shallow(
            <RegisterForm name='Register Form test' />
        );
        expect(tree).toMatchSnapshot();
    });
});