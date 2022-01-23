import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header-container">
        <h1>My Portfolio</h1>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </nav>
    </header>
);

export default Header;