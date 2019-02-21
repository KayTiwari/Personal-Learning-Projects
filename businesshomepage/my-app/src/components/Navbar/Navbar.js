import React from 'react';
import Logo from '../logo';
import './Navbar.css';

const Navbar = props => (
    <div className='navbarwrap'>
    <header className='navbar'>
        <nav className='navbar_navigation'>
            <div><Logo /></div>
            <div className='navbar_title'><a href='/'>Abhinatta</a></div>
            <div className='navitems'>
                <ul>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Work</a></li>
                    <li><a href='/'>Manifesto</a></li>
                    <li><a href='/'>Services</a></li>
                    <li className='content'><a href='/'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
)
export default Navbar;