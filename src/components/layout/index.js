import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Loader from '../Loader';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import '../../flex.css';

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.isLoading && this.props.location.pathname == '/home' ? (
          <Loader />
        ) : null}
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

export default connect(mapStateToProps)(withRouter(Layout));
