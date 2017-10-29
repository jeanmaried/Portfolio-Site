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
			<div className="copyright yellow">© {d} jodalmasso.com</div>
    	</footer>
    );
}

export default Footer;