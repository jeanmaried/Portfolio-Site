import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout'

class Contact extends Component {
  render() {
    return (
      <div id="landing">
      <Layout>
          <div className="flex justify-around direction-row">
              <form className="flex direction-column">
                <input type="text" name="firstname" placeholder="First Name"/>
                <input type="text" name="lastname" placeholder="Last Name"/>
                <input type="text" name="Message" placeholder="Your Message"/>
                <input type="submit" name=""/>
              </form>
          </div>
      </Layout>
      </div>
    );
  }
}

export default Contact;