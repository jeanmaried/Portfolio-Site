import React, { Component } from 'react';
import ProjectSlides from './ProjectSlides';
import { connect } from 'react-redux';
import {
  getLanguage,
  getProjects,
  getNotLoading
} from '../../redux/modules/state';

import './styles.css';

import axios from 'axios';

class Slider extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    if (this.props.language == 'french') {
      axios.get('project-config-french.json').then(res => {
        this.props.dispatch(getProjects(res.data));
      });
    } else {
      axios.get('project-config.json').then(res => {
        this.props.dispatch(getProjects(res.data));
      });
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  removeLoader = () => {
    this.props.dispatch(getNotLoading());
  };

  render() {
    let i = 0;
    let projects = this.props.project;
    return (
      <div className="card_collection">
        <h2 className="text-align">
          {this.props.language == 'french' ? 'Projets' : 'Projects'}
        </h2>
        <div className=" flex flex-wrap justify-center align-items-center">
          {projects.map(project => {
            i += 1;
            return (
              <ProjectSlides
                loader={this.removeLoader}
                project_info={project}
                key={i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen,
  project: state.projectData,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(Slider);
