import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../../assets/img/logo.png';


class Header extends React.Component{

    render() {
        return (
        <Navbar color="dark" className="navbar-dark navbar-expand-sm" toggleable>
           <NavbarBrand href="/" className="mar-auto">
                    <img src={logo} className="Header-logo" alt="logo" />
            </NavbarBrand>
        </Navbar>
        );
      }
    }

export default Header;