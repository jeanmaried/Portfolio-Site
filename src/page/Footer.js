import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
    return (
    	<footer className="flex direction-row justify-between text-align">
	    		<Link to="/projects"><div className="menu"><FontAwesome name="briefcase" size="2x"/></div></Link>
	    		<Link to="/contact"><div className="menu"><FontAwesome name="phone" size="2x"/></div></Link>
    	</footer>
    );
}

export default Footer;