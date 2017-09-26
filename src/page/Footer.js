import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../flex.css';

class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div className="flex direction-row justify-between">
	    		<Link to="/projects">PROJECTS</Link>
	    		<Link to="/contact">CONTACT</Link>
	    	</div>
    		<div className="flex justify-center">JoDalmasso All Rights Reserved</div>
    	</footer>
    );
  }
}

export default Footer;