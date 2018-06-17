import React, { Component } from "react";
import Card from "../Card/Card";
import firebase from "../../firebase";
import { connect } from "react-redux";
import Masonry from 'react-masonry-component';
import "./Projects.css";

const masonryOptions = {
  transitionDuration: 800,
  fitWidth: true
};

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen,
  project: state.projectData,
});

class Slider extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    firebase.database().ref("projects").on("value", snapshot => {
      const items = snapshot.val();
      let newState = [];

      for (let item in items) {
        const data = {
          ...items[item], id: item
        }
        newState.unshift(data);

        this.setState({ items: newState });
      }
    });
  }

  renderProjects = () => {
    return this.state.items.sort().map(project => <Card project_info={project} language={this.props.language} key={project.id} />)
  }

  render() {

    return (
      <div className="card_collection">
        <h2 className="text-align">
          {this.props.language === "french" ? "Projets" : "Projects"}
        </h2>
        <Masonry
          className={'masonry'} // default ''
          // elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
        // disableImagesLoaded={false} // default false
        // updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        // imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {this.renderProjects()}
        </Masonry>
      </div >
    );
  }
}

export default connect(mapStateToProps)(Slider);
