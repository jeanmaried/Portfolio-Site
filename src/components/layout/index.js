import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

import { withRouter } from 'react-router-dom';

import '../../flex.css';

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.location.pathname == '/' ? null : <Header />}
        {this.props.children}
        {this.props.location.pathname == '/' ? null : <Footer />}
      </div>
    );
  }
}

export default withRouter(Layout);
