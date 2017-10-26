import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/projects.css'


const ProjectList = function({item}) {
  let background = {backgroundImage: `url(${item.picture})`};
  return (
  <li className="project text-align flex align-items-center direction-column" id={item.id}>
      <h1 className="yellow">{item.title}</h1>
      <div className="flex align-items-center direction-column">
        <div className="background" style={background}></div>
        <p>{item.description}</p>
        <div className="project_links flex justify-around">
          <a target="_blank" href={item.site_link}><FontAwesome name="mouse-pointer" size="2x"/></a>
          <a target="_blank" href={item.git_link}><FontAwesome name="github" size="2x"/></a>
        </div>
  </div>
  </li>
)}

export default ProjectList;