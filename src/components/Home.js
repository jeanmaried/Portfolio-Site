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
          <div className="gravity flex align-items-center direction-column">
            <div className="earth text-align">
            <h1>WELCOME</h1>
            <h3 className="white">Feel free to explore!</h3>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;