import React from 'react';
import logo from '../../public/images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav className='nav--container'>
                <img src={logo} alt="airbnb logo" />
        </nav>
    )
}