const GET_LANGUAGE = 'GET_LANGUAGE';
const GET_PROJECTS = 'GET_PROJECTS';

export const getProjects = projects => ({
  type: GET_PROJECTS,
  payload: projects
});

export const getLanguage = language => {
  return function (dispatch) {
    dispatch({
      type: GET_LANGUAGE,
      payload: language
    });
  };
};

export default (
  state = { languageChosen: 'english', projectData: [] },
  action
) => {
  switch (action.type) {
    case GET_LANGUAGE:
      return { ...state, languageChosen: action.payload };
    case GET_PROJECTS:
      return { ...state, projectData: action.payload };
    default:
      return state;
  }
};
