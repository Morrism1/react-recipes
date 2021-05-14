import { combineReducers } from 'redux';
import categories from './categories';
import meals from './meals';

export default combineReducers({
  categories, meals,
});
