import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ButtonContainer } from "./Button";
// import {logo} from '../tk_logo.png';


class NavBar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

            <Link className="logo" to="/">
            <span role="img" aria-label="crown">👑</span> Tails Kingdom
            <span role="img" aria-label="crown"> 👑</span> 
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5"></li>
                <Link to="/" className="nav-link">
                    Products
                </Link>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                     <i className="fas fa-cart-plus"/>
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
           </NavWrapper>
        );
    }
}
const NavWrapper= styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainColor) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.logo{
    color: var(--lightPurple) !important;
    font-size: 1.7rem;
    text-transform: capitalize;
    text-decoration:none;
    font-family: "Oswald", sans-serif;
}

`


export default NavBar;