import React from 'react';
import Logo from '../logo';
import './Navbar.css';

const Navbar = () => (
    <div className='navbarwrap'>
        <div className='navbar_navigation'></div>
            <div><Logo /></div>
            <div className='navbar_title'><a href='/'>Anattia</a></div>
            <div className='navitems'>
                <ul className='container'>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Work</a></li>
                    <li><a href='/'>Manifesto</a></li>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
    </div>
)
export default Navbar;