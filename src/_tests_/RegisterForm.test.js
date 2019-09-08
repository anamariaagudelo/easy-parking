import React from 'react';
import RegisterForm from '../components/screens/registerPage/RegisterForm'

describe('RegisterForm', ()=>{
    it('should be defined', ()=>{
        expect(<RegisterForm/>).toBeDefined();
    });
})