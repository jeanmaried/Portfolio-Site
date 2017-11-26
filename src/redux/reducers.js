import { combineReducers } from 'redux';
import languageChosen from './modules/language';

export default combineReducers({
  language: languageChosen
});
