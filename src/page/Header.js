import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../flex.css';

class Header extends Component {
  render() {
    return (
        <header className="flex direction-row justify-between">
        	<Link to="/home"><div className="menu">HOME</div></Link>
        	<Link to="/about"><div className="menu">ABOUT</div></Link>
        </header>
    );
  }
}

export default Header;