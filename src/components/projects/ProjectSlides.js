import React from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import './styles.css';

const styles = {
  background: '#292F33'
};

const ProjectSlides = props => {
  let project_info = props.project_info;
  return (
    <div className="card">
      <Card id={project_info.id} containerStyle={styles}>
        <CardMedia>
          <img className="card_image" src={project_info.image} alt="" />
        </CardMedia>
        <CardTitle
          title={
            props.language === 'french'
              ? project_info.titleFr
              : project_info.title
          }
          subtitle={project_info.tags}
        />
        <CardText className="card_description">
          {props.language === 'french'
            ? project_info.descriptionFr
            : project_info.description}
        </CardText>
        <CardActions>
          {project_info.website ? (
            <a target="_blank" href={project_info.website}>
              <RaisedButton
                backgroundColor="#616161"
                label={<FontAwesome name="mouse-pointer" size="2x" />}
              />
            </a>
          ) : null}
          {project_info.github ? (
            <a target="_blank" href={project_info.github}>
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

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen
});

export default connect(mapStateToProps)(ProjectSlides);
