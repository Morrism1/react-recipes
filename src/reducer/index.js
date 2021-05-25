import { combineReducers } from 'redux';
import categories from './categories';
import meals from './meals';
import mealData from './mealData';
import filter from './filter';

export default combineReducers({
  categories, meals, mealData, filter,
});
