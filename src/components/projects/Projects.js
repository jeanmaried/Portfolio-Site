import React, { Component } from 'react';
import ProjectSlides from './ProjectSlides';
import firebase from '../../firebase';
import { connect } from 'react-redux';
import { getNotLoading, getLoading } from '../../redux/modules/state';

import './styles.css';

class Slider extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.props.dispatch(getLoading());
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
        newState.unshift({
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
    let projectArray = this.state.items.sort();
    return (
      <div className="card_collection">
        <h2 className="text-align">
          {this.props.language === 'french' ? 'Projets' : 'Projects'}
        </h2>
        <div className=" flex flex-wrap justify-center align-items-center">
          {projectArray.map(project => {
            return <ProjectSlides project_info={project} key={project.id} />;
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
