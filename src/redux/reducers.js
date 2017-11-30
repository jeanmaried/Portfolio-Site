import { combineReducers } from 'redux';
import languageChosen from './modules/state';

export default combineReducers({
  state: languageChosen
});
