import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/projects.css'

class Projects extends Component {
  render() {
    return (
        <Layout>
          <div className="projects flex align-items-center direction-column">
            <div className="flex flex-wrap justify-center text-align white">
  

                <div className="project" id="aloha">
                  <div className="project_space">
                    <h2 className="yellow">Aloha</h2>
                    <p>Responsive shopping website landing page making use of Sass and Gulp</p>
                  </div>
                  <a href="#"><FontAwesome name="mouse-pointer" size="2x"/></a>
                  <a href="#"><FontAwesome name="github" size="2x"/></a>
                </div>

                <div className="project">
                <div className="project_space">
                  <h2 className="yellow">Inhabitent</h2>
                  <p>Developed WordPress theme with PHP for blog/shop</p>
                </div>
                  <a href="#"><FontAwesome name="mouse-pointer" size="2x"/></a>
                  <a href="#"><FontAwesome name="github" size="2x"/></a>
                </div>

                <div className="project" id="shopping_cart">
                <div className="project_space">
                  <h2 className="yellow">Shopping Cart</h2>
                  <p>Shopping cart built from the ground up in ES6 with API call</p>
                </div>  
                  <a href="#"><FontAwesome name="mouse-pointer" size="2x"/></a>
                  <a href="#"><FontAwesome name="github" size="2x"/></a>
                </div>

                <div className="project" id="alien-encounter">
                <div className="project_space">
                  <h2 className="yellow">Alien Encounter</h2>
                  <p>React.js app to update API using axios</p>
                </div> 
                  <a href="#"><FontAwesome name="mouse-pointer" size="2x"/></a>
                  <a href="#"><FontAwesome name="github" size="2x"/></a>
                </div>

                <div className="project" id="nyt">
                <div className="project_space">
                  <h2 className="yellow">News App</h2>
                  <p>News app that makes API call to New York Times with Vanilla JavaScript</p>
                </div>  
                  <a href="#"><FontAwesome name="mouse-pointer" size="2x"/></a>
                  <a href="#"><FontAwesome name="github" size="2x"/></a>
                </div>

                <div className="project">
                <div className="project_space">
                  <h2 className="yellow">GTA Tooth Fairy</h2>
                  <p>Developed WordPress theme as part of a team for "GTA Tooth Fairy"</p>
                </div>  
                  <a href="#"><FontAwesome name="mouse-pointer" size="2x"/></a>
                  <a href="#"><FontAwesome name="github" size="2x"/></a>
                </div>

            </div>
          </div>

        </Layout>
    );
  }
}

export default Projects;