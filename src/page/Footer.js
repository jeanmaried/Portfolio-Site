import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../flex.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
  render() {
    return (
    	<footer>
    		<div className="flex direction-row justify-between text-align">
	    		<Link to="/projects"><div className="menu"><FontAwesome name="briefcase" size="2x"/></div></Link>
	    		<Link to="/contact"><div className="menu"><FontAwesome name="phone" size="2x"/></div></Link>
	    	</div>
    	</footer>
    );
  }
}

export default Footer;