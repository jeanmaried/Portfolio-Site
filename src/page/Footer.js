import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../flex.css';

class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div className="flex direction-row justify-between">
	    		<Link to="/projects"><div className="menu">PROJECTS</div></Link>
	    		<Link to="/contact"><div className="menu">CONTACT</div></Link>
	    	</div>
    	</footer>
    );
  }
}

export default Footer;