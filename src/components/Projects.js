import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';

class Projects extends Component {
  render() {
    return (
      <div id="landing">
        <Layout>
          <div className="projects flex justify-center">
            <div className="flex flex-wrap justify-center text-align white">
  

                <div className="project">
                  <h2>Aloha</h2>
                  <p>Responsive shopping website landing page making use of Sass and Gulp</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div className="project">
                  <h2>Inhabitent</h2>
                  <p>Developed WordPress theme with PHP for blog/shop</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div className="project">
                  <h2>Shopping Cart</h2>
                  <p>Shopping cart built from the ground up in ES6 with API call</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div className="project">
                  <h2>Alien Encounter</h2>
                  <p>React.js app to update API using axios</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div className="project">
                  <h2>News App</h2>
                  <p>News app that makes API call to New York Times with Vanilla JavaScript</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div className="project">
                  <h2>GTA Tooth Fairy</h2>
                  <p>Developed WordPress theme as part of a team for "GTA Tooth Fairy"</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Projects;