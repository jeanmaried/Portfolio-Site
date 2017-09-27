import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';

class Contact extends Component {
  render() {
    return (
      <div id="landing">
      <Layout>
        <div className="flex justify-center">
          <div className="contact">
            <h1>CONTACT</h1>
            <div className="flex white align-items-center direction-column">
            <p>+1(647)467-3977</p>
            <p>me@jodalmasso.com</p>
            <div className="flex justify-around white">
              <FontAwesome name="linkedin" size="2x"/>
              <FontAwesome name="github" size="2x"/>
              <FontAwesome name="envelope" size="2x"/>
            </div>
            </div>
          </div>
        </div>
      </Layout>
      </div>
    );
  }
}

export default Contact;