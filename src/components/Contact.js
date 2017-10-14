import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/contact.css'

class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className="flex justify-center">
          <div className="contact flex align-items-center direction-column">
            <div className="moon text-align">
              <div className="visibility2">
                <h1>CONTACT</h1>
                <p className="white">+1(647)467-3977</p>
                <p className="white">me@jodalmasso.com</p>
                <div className="flex justify-around white">
                  <a href="https://www.linkedin.com/in/joseph-jean-dalmasso-1b5473141/" target="_blank"><FontAwesome name="linkedin" size="2x"/></a>
                  <a href="https://github.com/jeanmaried" target="_blank"><FontAwesome name="github" size="2x"/></a>
                  <a href="mailto:me@jodalmasso.com"><FontAwesome name="envelope" size="2x"/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;