import React from 'react';
import Header from '../components/UI/Header'
import RegisterPage from '../../src/components/screens/registerPage/RegisterPage'


class MainComponent extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Header/>
                <RegisterPage/>
            </React.Fragment>
        )
    }
}

export default MainComponent