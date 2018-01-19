import React from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

import PropTypes from 'prop-types';

const styles = {
  background: '#292F33'
};

const ProjectSlides = ({ project_info }) => {
  console.log(project_info);
  return (
    <div className="card">
      <Card id={project_info.id} containerStyle={styles}>
        <CardMedia>
          <img className="card_image" src={project_info.image} alt="" />
        </CardMedia>
        <CardTitle title={project_info.title} subtitle={project_info.tags} />
        <CardText className="card_description">
          {project_info.description}
        </CardText>
        <CardActions>
          {!project_info.websiteURL ? (
            <a target="_blank" href={project_info.websiteURL}>
              <RaisedButton
                backgroundColor="#616161"
                label={<FontAwesome name="mouse-pointer" size="2x" />}
              />
            </a>
          ) : null}
          {!project_info.githubURL ? (
            <a target="_blank" href={project_info.githubURL}>
              <RaisedButton
                backgroundColor="#616161"
                label={<FontAwesome name="github" size="2x" />}
              />
            </a>
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectSlides;
