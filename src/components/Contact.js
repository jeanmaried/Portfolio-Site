import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';

class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className="flex justify-center">
          <div className="contact flex align-items-center direction-column">
            <h1>CONTACT</h1>
            <p className="white">+1(647)467-3977</p>
            <p className="white">me@jodalmasso.com</p>
            <div className="flex justify-around white">
              <FontAwesome name="linkedin" size="2x"/>
              <FontAwesome name="github" size="2x"/>
              <FontAwesome name="envelope" size="2x"/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;