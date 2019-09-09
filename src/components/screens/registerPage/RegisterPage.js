import React from 'react'
import { Container, Row, Col, Card, CardBody,CardHeader } from 'reactstrap';
import RegisterForm from '../registerPage/RegisterForm'
import './RegisterPages.scss'
import logo from '../../../assets/img/logo.png'
import {SubmissionError} from 'redux-form'


export class RegisterPage extends React.Component {

    handleSubmit = (value) =>{
        if(value.name !== 'anny'){
            throw new SubmissionError({
                name: 'Name no es anny'
            })
        }
    }
    handleValidSubmit(value) {
        const data = {
          userName: 'ana',
          userLastName: 'agudelo',
          userEmail: 'values.email@gmail.com',
          userPhone: '123456',
          userAddress: '23sdfg',
          userPass: '234567'
        }
        fetch(`http://localhost:8080/user/register`, {
          method: 'post',
          body: JSON.stringify(data)
        })
      }

    getInitialValues = ()=>{
        return{
            name: '',
        }
    }
    render() {
        return (
            <Container className="Register-page mt-2 mt-md-5 ">
                <Row>
                    <Col md="6">
                        <Card className="intro-card">
                            <img src={logo} alt="S4N_LOGO" className="img-intro card-img-top"/>
                            <CardBody>
                                <div>
                                    <h4>Welcome to Eisy parking</h4>
                                    <h6>Orvie</h6>
                                    <h6>Jakeline</h6>
                                    <h6>Ana María</h6>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" className="mt-5 mt-md-0">
                        <Card>
                            <CardHeader>
                                <h4>Register Form</h4>
                            </CardHeader>
                            <CardBody>
                                <RegisterForm
                                onSubmit={this.handleValidSubmit}
                                initialValues={this.getInitialValues()}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RegisterPage