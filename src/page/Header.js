import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../flex.css';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  render() {
    return (
        <header className="flex direction-row justify-between text-align">
        	<Link to="/home"><div className="menu"><FontAwesome name="home" size="2x"/></div></Link>
        	<Link to="/about"><div className="menu"><FontAwesome name="question" size="2x"/></div></Link>
        </header>
    );
  }
}

export default Header;