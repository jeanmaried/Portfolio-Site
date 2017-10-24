import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import FontAwesome from 'react-fontawesome';
import Meta from './Meta';

const Header = () => {
    return (
        <header className="flex justify-between text-align">
            <Meta />
        	<Link to="/"><div className="menu"><FontAwesome name="home" size="2x"/></div></Link>
            <Link to="/projects"><div className="menu"><FontAwesome name="briefcase" size="2x"/></div></Link>
        </header>
    );
}

export default Header;