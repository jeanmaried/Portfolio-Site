import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import '../flex.css';

class Header extends Component {
  render() {
    return (
        <header className="flex direction-row justify-between">
        	<Link to="/home">HOME</Link>
        	<Link to="/about">ABOUT</Link>
        </header>
    );
  }
}

export default Header;