import React from 'react';
import RegisterPage from '../components/screens/registerPage/RegisterPage'

describe('RegisterForm', ()=>{
    it('should be defined', ()=>{
        expect(<RegisterPage/>).toBeDefined();
    });
});