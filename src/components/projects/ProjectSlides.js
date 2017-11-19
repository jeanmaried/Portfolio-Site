import React from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css';

import PropTypes from 'prop-types';


const ProjectSlides= ({project_info}) => {
  console.log(project_info)

  const styles = {
    imageBackground: {
      backgroundImage: `url(${project_info.picture})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  };

  return (
      <div className="project_card" id={project_info.id}>
          <h1 className="yellow">{project_info.title}</h1>
            <div className="background flex justify-end align-items-end" style={styles.imageBackground}>
                <a target="_blank" href={project_info.site_link}><FontAwesome name="mouse-pointer"/></a>
                <a target="_blank" href={project_info.git_link}><FontAwesome name="github"/></a>
            <p className="white description">{project_info.description}</p>
          </div>
      </div>

     
  )
}

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