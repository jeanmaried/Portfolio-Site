const GET_LANGUAGE = 'GET_LANGUAGE';

export const getLanguage = language => {
  return function(dispatch) {
    dispatch({
      type: GET_LANGUAGE,
      payload: language
    });
  };
};

export default (state = { languageChosen: '' }, action) => {
  switch (action.type) {
    case GET_LANGUAGE:
      return { ...state, languageChosen: action.payload };
    default:
      return state;
  }
};
