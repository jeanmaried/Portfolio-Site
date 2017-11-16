import React from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import ChatBot from '../chatbot';
import './styles.css';

const Footer = () => {

	var d = new Date();
	d = d.getFullYear();

    return (
    	<footer className="flex direction-row justify-between text-align">
			<ChatBot />
			<div className="copyright yellow">© {d} jodalmasso.com</div>
    	</footer>
    );
}

export default Footer;