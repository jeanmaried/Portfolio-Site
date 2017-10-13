import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/projects.css'

const ProjectList = ({item}) => (
  <li className="project" id={item.id}>
      <div className="title_space flex justify-center">
        <h1 className="yellow">{item.title}</h1>
      </div>
      <div className="overlay">
        <div className="project_links stretch">
          {/* <a target="_blank" href={item.site_link}><FontAwesome name="mouse-pointer" size="2x"/></a> */}
          <a target="_blank" href={item.git_link}><FontAwesome name="github" size="2x"/></a>
        </div>
        <p className="text">{item.description}</p>
      </div>
  </li>
)

export default ProjectList;