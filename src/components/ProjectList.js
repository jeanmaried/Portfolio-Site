import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/projects.css'


const ProjectList = function({item}) {
  let background = {backgroundImage: `url(${item.picture})`};
  return (
  // let background = {backgroundImage: `url(../assets/${item.picture})`};
  <li className="project text-align" id={item.id}>
      <h1 className="yellow">{item.title}</h1>
      <div className="background" style={background}></div>
      <a target="_blank" href={item.site_link}><FontAwesome name="mouse-pointer" size="2x"/></a>
      <a target="_blank" href={item.git_link}><FontAwesome name="github" size="2x"/></a>
      <p>{item.description}</p>
  </li>
)}

export default ProjectList;