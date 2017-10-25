import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/home.css'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="flex justify-center">
          <Link to="/about">
            <div className="gravity flex align-items-center direction-column">
              <div className="earth text-align flex align-items-center justify-center">
              <h1 className="visibility">WELCOME</h1>
              </div>
            </div>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Home;