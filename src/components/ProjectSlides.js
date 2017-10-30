import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import FontAwesome from 'react-fontawesome';
import '../styles/projects.css'


const ProjectSlides= (props) => {

  const current = props.project_info[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current.picture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };

  return (

      <div className="slide text-align flex align-items-center direction-column" id={current.id}>
        <div className="project_box">
          <h3 className="title yellow">{current.title}</h3>
          <div className="flex align-items-center direction-column">
            <div className="background" style={styles.imageBackground}>
              <div className="project_links flex justify-around">
                <a target="_blank" href={current.site_link}><FontAwesome name="mouse-pointer"/></a>
                <a target="_blank" href={current.git_link}><FontAwesome name="github"/></a>
              </div>
            </div>
            <p className="white description">{current.description}</p>
          </div>
        </div>
      </div>

     
  )
}

export default ProjectSlides;