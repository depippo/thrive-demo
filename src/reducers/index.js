import { combineReducers } from 'redux';
import quotes from './quotes';
import checkbox from './checkbox';

export default combineReducers({
  quotes,
  checkbox
});