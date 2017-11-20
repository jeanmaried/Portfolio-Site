import React, { Component } from 'react';
import ProjectSlides from './ProjectSlides';
import './styles.css';
import '../../flex.css';

import axios from 'axios';



export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      project_info: [],
    }
  }

  componentWillMount() {
    axios.get('project-config.json')
      .then((res) => {
        this.setState({
          project_info: res.data
        });
    });
  }

  render() {
    let i = 0;
    let projects = this.state.project_info;
    return (
      <div className="card_collection">
        <h2 className="text-align">Projects</h2>
        <div className=" flex flex-wrap justify-center align-items-center">
          {
            projects.map((project)=>{
              i += 1
              return <ProjectSlides
                        project_info={project} key={i}
                      />
            })
          }
        </div>
      </div>
    );
  }
}



