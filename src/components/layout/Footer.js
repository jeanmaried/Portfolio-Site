import React from 'react';
import ChatBot from '../chatbot';

import './styles.css';
import '../../flex.css';

const Footer = () => {
    return (
    	<footer className="flex direction-row justify-between text-align">
			<ChatBot />
    	</footer>
    );
}

export default Footer;