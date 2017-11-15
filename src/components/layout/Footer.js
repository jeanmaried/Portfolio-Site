import React from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css';

const Footer = () => {

	var d = new Date();
	d = d.getFullYear();

    return (
    	<footer className="flex direction-row justify-between text-align">
			{/* <Link to="/contact"><div className="menu"><FontAwesome name="phone" size="2x"/></div></Link>
            <Link to="/about"><div className="menu"><FontAwesome name="question" size="2x"/></div></Link> */}
			<div className="copyright yellow">© {d} jodalmasso.com</div>
    	</footer>
    );
}

export default Footer;