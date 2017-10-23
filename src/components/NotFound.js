import React, { Component } from 'react';
import '../styles/flex.css';
import Layout from '../page/Layout';

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <div className="text align">
            <h1 className="notFound white">404 Page Not Found</h1>
        </div>
      </Layout>
    );
  }
}

export default NotFound;