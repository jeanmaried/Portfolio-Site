const GET_LANGUAGE = 'GET_LANGUAGE';
const GET_PROJECTS = 'GET_PROJECTS';
const GET_LOADING = 'GET_LOADING';
const GET_NOT_LOADING = 'GET_NOT_LOADING';

export const getProjects = projects => ({
  type: GET_PROJECTS,
  payload: projects
});

export const getLanguage = language => {
  return function(dispatch) {
    dispatch({
      type: GET_LANGUAGE,
      payload: language
    });
  };
};

export const getLoading = () => ({
  type: GET_LOADING
});

export const getNotLoading = () => ({
  type: GET_NOT_LOADING
});

export default (
  state = { isLoading: true, languageChosen: 'english', projectData: [] },
  action
) => {
  switch (action.type) {
    case GET_LANGUAGE:
      return { ...state, languageChosen: action.payload };
    case GET_PROJECTS:
      return { ...state, isLoading: false, projectData: action.payload };
    case GET_LOADING:
      return { ...state, isLoading: true };
    case GET_NOT_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
