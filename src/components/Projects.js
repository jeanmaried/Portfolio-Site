import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import ProjectList from './ProjectList';
import '../styles/projects.css';
import '../styles/flex.css';

class Projects extends Component {
  render() {
  let project_object = [
    {id: "aloha", title: "Aloha", site_link: "#", git_link:"#", description:"Responsive shopping website landing page making use of Sass and Gulp"},
    {id: "inhabitent", title: "Inhabitent", site_link: "#", git_link:"#", description:"Developed WordPress theme with PHP for blog/shop"},
    {id: "shopping_cart", title: "Shopping Cart", site_link: "#", git_link:"#", description:"Shopping cart built from the ground up in ES6 with API call"},
    {id: "alien-encounter", title: "Alien Encounter", site_link: "#", git_link:"#", description:"React.js app to update API using axios"},
    {id: "nyt", title: "News App", site_link: "#", git_link:"#", description:"News app that makes API call to New York Times with Vanilla JavaScript"},
    {id: "tooth_fairy", title: "GTA Tooth Fairy", site_link: "#", git_link:"#", description:'Developed WordPress theme as part of a team for "GTA Tooth Fairy"'},
  ]
    return (
        <Layout>
          <div className="projects flex align-items-center direction-column">
              <ul className="flex flex-wrap justify-center text-align white">
                {project_object.map((project, i) => <ProjectList item={project} key={project.id} />)}
              </ul>
          </div>

        </Layout>
    );
  }
}

export default Projects;







