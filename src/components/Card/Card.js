import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Card.css'

export default class Card extends Component {

  renderWebsiteLink = () => {
    const { websiteURL } = this.props.project_info

    return (websiteURL &&
      <a target="_blank" href={websiteURL}>
        <FontAwesome name="mouse-pointer" size="2x" />
      </a>)
  }

  renderGithubLink = () => {
    const { githubURL } = this.props.project_info

    return (
      githubURL &&
      <a target="_blank" href={githubURL}>
        <FontAwesome name="github" size="2x" />
      </a>
    )
  }
  render() {
    const { project_info, language } = this.props
    const { id, imageURL, title, titleFr, projectTags, description, descriptionFr } = project_info

    return (
      <div id={id} class="card">
        <div class="card__side card__side--front">
          <div class="card__picture card__picture--1" style={{ backgroundImage: `url(${imageURL})` }}>
            &nbsp;
          </div>
          <h4 class="card__heading">
            <span class="card__heading-span card__heading-span--1">
              {language === 'french' ? titleFr : title}
            </span>
          </h4>
          <div class="card__details">
            {projectTags}
          </div>
        </div>
        <div class="card__side card__side--back card__side--back-1">
          <div class="card__cta">
            <div class="card__price-box">
              {language === 'french' ? descriptionFr : description}
            </div>
            {this.renderWebsiteLink()}
            {this.renderGithubLink()}
          </div>
        </div>
      </div>
    );
  }
}