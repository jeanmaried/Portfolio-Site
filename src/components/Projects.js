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
    {id: "shopping_cart", title: "Shopping Cart", site_link: "https://jeanmaried.github.io/ES6-shopping-cart/", git_link:"https://github.com/jeanmaried/ES6-shopping-cart", description:"Shopping cart built ground up in ES6 with API call to Best Buy"},
    {id: "nyt", title: "News App", site_link: "https://jeanmaried.github.io/News-app/", git_link:"https://github.com/jeanmaried/News-app", description:"New York Times news app. Using jQuery and ajax call"},
    {id: "tooth_fairy", title: "GTA Tooth Fairy", site_link: "http://www.gtatoothfairy.com/myblog/", git_link:"https://github.com/jeanmaried/tooth_fairy_wordpress_site", description:'Developed WordPress theme as part of a team for "GTA Tooth Fairy"'},
    // {id: "inhabitent", title: "Inhabitent", site_link: "#", git_link:"https://github.com/jeanmaried/inhabitent_camping_site", description:"Developed WordPress theme with PHP for blog/shop"},
    {id: "aloha", title: "Aloha", site_link: "https://jeanmaried.github.io/Aloha_shopping_page/", git_link:"https://github.com/jeanmaried/Aloha_shopping_page", description:"Responsive shopping website landing page making use of Sass and Gulp"},
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







