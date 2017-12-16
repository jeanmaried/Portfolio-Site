import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Loader from '../Loader';
import { connect } from 'react-redux';
import Particles from '../Particles';

import { withRouter } from 'react-router-dom';

class Layout extends Component {
  render() {
    let particles;
    if (
      (navigator.userAgent.indexOf('Opera') ||
        navigator.userAgent.indexOf('OPR')) != -1 ||
      navigator.userAgent.indexOf('Chrome') != -1 ||
      navigator.userAgent.indexOf('Firefox') != -1
    ) {
      console.log('Not Safari or IE :)');
    } else {
      particles = <Particles />;
    }
    return (
      <div>
        {this.props.isLoading ? <Loader /> : null}
        {particles}
        {this.props.location.pathname == '/' ? null : <Header />}
        {this.props.children}
        {this.props.location.pathname == '/' ? null : <Footer />}
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  isLoading: state.isLoading
});

export default withRouter(connect(mapStateToProps)(Layout));
