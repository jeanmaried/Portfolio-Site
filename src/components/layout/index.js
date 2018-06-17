import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Loader from '../Loader';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div>
        {/* <Loader /> */}
        {this.props.location.pathname === '/' ? null : <Header />}
        {this.props.children}
        {this.props.location.pathname === '/' ? null : <Footer />}
      </div>
    );
  }
}

export default withRouter(connect(null)(Layout));
