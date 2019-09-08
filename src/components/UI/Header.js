import React from 'react';
import { Navbar, NavbarBrand, Col, Row } from 'reactstrap';
import logo from '../../assets/img/logo.png';


class Header extends React.Component {

  render() {
    return (
      <Navbar color="dark" className="navbar-dark navbar-expand-sm">
        <NavbarBrand href="/" className="mar-auto">
          <Row className="mt-2">
            <Col md="3">
              <img src={logo} className="Header-logo" alt="logo" />
            </Col>
            <Col md="9">
              <h1>Easy Parking</h1>
            </Col>
          </Row>
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default Header;