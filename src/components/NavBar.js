import React, { Component } from 'react';
// import logo from './logo.svg';
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
           <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">

            <Link to="/">
                <img src="../logo.svg" alt="logo"
                className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5"></li>
                <Link to="/" className="nav-link">
                    Products
                </Link>
            </ul>
            <Link to="/cart" className="ml-auto">
                <button>
                    <i className="fas fa-cart-plus"/>
                    My Cart
                </button>
            </Link>
           </nav>
        );
    }
}

export default NavBar;