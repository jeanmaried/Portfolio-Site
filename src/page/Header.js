import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import FontAwesome from 'react-fontawesome';

const Header = () => {
    return (
        <header className="flex justify-between text-align">
        	<Link to="/"><div className="menu"><FontAwesome name="home" size="2x"/></div></Link>
        	<Link to="/contact"><div className="menu"><FontAwesome name="phone" size="2x"/></div></Link>
        </header>
    );
}

export default Header;