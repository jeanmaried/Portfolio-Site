import React, { Component } from 'react';
import ProjectSlides from './ProjectSlides';
import firebase from '../../firebase';
import { connect } from 'react-redux';
import {
  getLanguage,
  getProjects,
  getNotLoading,
  getLoading
} from '../../redux/modules/state';

import './styles.css';

import axios from 'axios';

class Slider extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.props.dispatch(getLoading());
    if (this.props.language == 'french') {
      axios.get('project-config-french.json').then(res => {
        this.props.dispatch(getProjects(res.data));
      });
    } else {
      axios.get('https://mi-mini-cms.firebaseio.com/.json').then(res => {
        this.props.dispatch(getProjects(res.data.projects));
      });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(getNotLoading());
    }, 1000);
    window.scrollTo(0, 0);

    const itemsRef = firebase.database().ref('projects');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();

      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          description: items[item].description,
          titleFr: items[item].titleFr,
          descriptionFr: items[item].descriptionFr,
          image: items[item].image,
          website: items[item].websiteURL,
          github: items[item].githubURL,
          tags: items[item].projectTags
        });

        this.setState({
          items: newState
        });
      }
    });
  }

  render() {
    let i = 0;

    let projectArray = this.state.items;
    return (
      <div className="card_collection">
        <h2 className="text-align">
          {this.props.language == 'french' ? 'Projets' : 'Projects'}
        </h2>
        <div className=" flex flex-wrap justify-center align-items-center">
          {projectArray.map(project => {
            i += 1;
            return <ProjectSlides project_info={project} key={i} />;
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
