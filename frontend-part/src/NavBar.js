import React from 'react';
import { NavLink } from 'react-router-dom';
  
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/articles" activeClassName="active">Articles</NavLink>
            </li>
        </ul>
    </nav>
);

export default NavBar;