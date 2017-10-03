import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import FontAwesome from 'react-fontawesome';
import '../styles/projects.css'

const ProjectList = ({item}) => (
  <li className="project" id={item.id}>
      <div className="title_space flex direction-row align-items-center justify-between">
        <a href={item.site_link}><FontAwesome name="mouse-pointer" size="2x"/></a>
        <h1 className="yellow">{item.title}</h1>
        <a href={item.git_link}><FontAwesome name="github" size="2x"/></a>
      </div>
      <p className="description_space">{item.description}</p>
  </li>
)

export default ProjectList;