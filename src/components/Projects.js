import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout'

class Projects extends Component {
  render() {
    return (
      <div id="landing">
        <Layout>
          <div className="flex direction-row flex-wrap justify-center">
            <div className="projects">Aloha Landing Page</div>
            <div className="projects">inhabitent_camping_site</div>
            <div className="projects">ES6-shopping-cart</div>
            <div className="projects">React-alien-encounter-reporting-app</div>
            <div className="projects">New-York-Times-API-app</div>
            <div className="projects">tooth_fairy_wordpress_site</div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Projects;