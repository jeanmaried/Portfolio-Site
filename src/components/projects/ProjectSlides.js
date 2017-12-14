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

const ProjectSlides = ({ project_info }, { loader }) => {
  return (
    <div className="card">
      <Card id={project_info.id} containerStyle={styles}>
        <CardMedia>
          <img
            onLoad={loader}
            className="card_image"
            src={project_info.picture}
            alt=""
          />
        </CardMedia>
        <CardTitle
          title={project_info.title}
          subtitle={project_info.tools.join(', ')}
        />
        <CardText className="card_description">
          {project_info.description}
        </CardText>
        <CardActions>
          {!project_info.site_link ? null : (
            <a target="_blank" href={project_info.site_link}>
              <RaisedButton
                backgroundColor="#616161"
                label={<FontAwesome name="mouse-pointer" size="2x" />}
              />
            </a>
          )}
          <a target="_blank" href={project_info.git_link}>
            <RaisedButton
              backgroundColor="#616161"
              label={<FontAwesome name="github" size="2x" />}
            />
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

// ProjectSlides.propTypes = {
//   current: PropTypes.number.isRequired,
//   project_info: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     site_link: PropTypes.string.isRequired,
//     git_link: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   })),
//   ready: PropTypes.bool.isRequired
// }

export default ProjectSlides;
