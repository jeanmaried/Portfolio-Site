import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import FontAwesome from 'react-fontawesome';
import './style.css';

const Footer = () => {

	var d = new Date();
	d = d.getFullYear();

    return (
    	<footer className="flex direction-row justify-between text-align">
			<Link to="/about"><div className="menu"><FontAwesome name="question" size="2x"/></div></Link>
			<div className="copyright yellow">© {d} jodalmasso.com</div>
			<Link to="/contact"><div className="menu"><FontAwesome name="phone" size="2x"/></div></Link>
    	</footer>
    );
}

export default Footer;