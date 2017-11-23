import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

import Particles from '../Particles';

import '../../flex.css';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Particles />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
