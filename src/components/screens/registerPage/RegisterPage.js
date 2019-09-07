import React from 'react'
import { Container, Row, Col, Card, CardBody,CardHeader } from 'reactstrap';
import RegisterForm from '../registerPage/RegisterForm'
import './RegisterPages.scss'
import logo from '../../../assets/img/logo.png'


export class RegisterPage extends React.Component {
    render() {
        return (
            <Container className="Register-page mt-2 mt-md-5 ">
                <Row>
                    <Col md="6">
                        <Card className="intro-card">
                            <img src={logo} alt="S4N_LOGO" className="img-intro card-img-top"/>
                            <CardBody>
                                <div>
                                    <h4>Bienvenido a Eisy parking</h4>
                                    <br/>
                                    <p>Proyecto para el curso Ingeniería de Procesos de Software</p>
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
                                <h4>Formulario de Registro</h4>
                            </CardHeader>
                            <CardBody>
                                <RegisterForm/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default RegisterPage