import React, { Component } from 'react';
import ProjectSlides from './ProjectSlides';
import './styles.css';
import '../../flex.css';

import axios from 'axios';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import Dots from './Dots';



export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      project_info: [],
      current: undefined,
      ready: false
    }
  }

  componentWillMount() {
    axios.get('project-config.json')
      .then((res) => {
        this.setImageArray(res.data);
    });
  }

  setImageArray(infoArray) {
    let newArray = [];
    for(let i = 0; i < infoArray.length; i++) {
      newArray.push(infoArray[i]);
    }
    this.setState({ project_info: newArray, current: 0, ready: true });
  }

  preloadNextImage = () => {
    let current = this.state.current;
    let project_info = this.state.project_info;

    if( (current !== undefined) && (current < project_info.length - 1) ){
      return (
        <div style={{display: 'none', height:'100%', backgroundImage: `url(${(this.state.project_info[this.state.current + 1])}.jpg)`}}></div>
      )
    } else{
      return null
    }
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="slider_holder flex direction-column justify-center align-items-center">
          <div className="slider flex direction-column justify-center align-items-center">
          <div className="flex align-items-center">
            <LeftArrow previousSlide={this.previousSlide} />
            {this.state.ready ?
              <div className="inner_slide">
                <ProjectSlides
                  project_info={this.state.project_info}
                  current={this.state.current}
                  ready={this.state.ready}
                />
                <Dots
                  numberOfDots={this.state.project_info.length}
                  isCurrent={this.state.current}
                  dotClick={this.dotClick}
                />
              </div>
              : null
            }
            <RightArrow nextSlide={this.nextSlide} />
          </div>

            {this.preloadNextImage()}
            </div>
        </div>
      </div>
    );
  }

  dotClick = (dotIndex) => {
    this.setState({ current: dotIndex })
  }

  previousSlide = () => {
    let current = this.state.current;
    let infoArray = this.state.project_info.length - 1;

    if(current >= 1)
      this.setState({ current: current - 1 })
    if(current === 0)
      this.setState({ current: infoArray })
  }

  nextSlide = () => {
    let current = this.state.current;
    let imageArray = this.state.project_info.length - 1;

    if((current >= 0) && (current !== imageArray))
      this.setState({ current: current + 1 })
    if(current === imageArray) {
      this.setState({ current: 0 })
    }
  }

}



