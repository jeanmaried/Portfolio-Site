import React from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css';

import PropTypes from 'prop-types';


const ProjectSlides= (props) => {
  console.log(props);
  const current = props.project_info[props.current];

  const styles = {
    imageBackground: {
      backgroundImage: `url(${current.picture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };

  return (
      <div className="slide text-align flex align-items-center direction-column" id={current.id}>
        <div className="project_box">
          <h2 className="title">{current.title}</h2>
          <div className="flex align-items-center direction-column">
            <div className="background flex justify-end" style={styles.imageBackground}>
              <div className="project_links flex justify-around">
                <a target="_blank" href={current.site_link}><FontAwesome name="mouse-pointer"/></a>
                <a target="_blank" href={current.git_link}><FontAwesome name="github"/></a>
              </div>
            </div>
            <p className="white description">{current.description}</p>
          </div>
        </div>
      </div>

     
  )
}

ProjectSlides.propTypes = {
  current: PropTypes.number.isRequired,
  project_info: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    site_link: PropTypes.string.isRequired,
    git_link: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  ready: PropTypes.bool.isRequired
}

export default ProjectSlides;