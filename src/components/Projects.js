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
  

                <div>
                  <div className="project">Aloha</div>
                  <p>I did blablbaldh;a dhsoh and won</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div>
                  <div className="project">Inhabitent</div>
                  <p>I did blablbaldh;a dhsoh and won</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div>
                  <div className="project">Shopping Cart</div>
                  <p>I did blablbaldh;a dhsoh and won</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div>
                  <div className="project">Alien Encounter</div>
                  <p>I did blablbaldh;a dhsoh and won</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div>
                  <div className="project">News App</div>
                  <p>I did blablbaldh;a dhsoh and won</p>
                  <FontAwesome name="mouse-pointer" size="2x"/>
                  <FontAwesome name="github" size="2x"/>
                </div>

                <div>
                  <div className="project">GTA Tooth Fairy</div>
                  <p>I did blablbaldh;a dhsoh and won</p>
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