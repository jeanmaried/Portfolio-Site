import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Loader from '../Loader';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import '../../flex.css';

class Layout extends Component {
  render() {
    console.log('Hello', this.props);
    return (
      <div>
        {this.props.isLoading ? <Loader /> : null}
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
