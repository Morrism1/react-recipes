import { getCategories, getMeals } from '../api';

export const LOAD_CATEGORIES_BEGIN = 'LOAD_CATEGORIES_BEGIN';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR';

export const LOAD_MEALS_BEGIN = 'LOAD_MEALS_BEGIN';
export const LOAD_MEALS_SUCCESS = 'LOAD_MEALS_SUCCESS';
export const LOAD_MEALS_ERROR = 'LOAD_CATEGORIES_ERROR';

export const loadCategories = () => (dispatch) => {
  dispatch({ type: LOAD_CATEGORIES_BEGIN });
  getCategories()
    .then((categories) => {
      dispatch({ type: LOAD_CATEGORIES_SUCCESS, payload: categories });
    })
    .catch((error) => {
      dispatch({ type: LOAD_CATEGORIES_ERROR, error });
    });
};

export const loadMeals = (strCategory) => (dispatch) => {
  dispatch({ type: LOAD_MEALS_BEGIN });
  getMeals(strCategory)
    .then((meals) => {
      dispatch({ type: LOAD_MEALS_SUCCESS, payload: meals });
    })
    .catch((error) => {
      dispatch({ type: LOAD_MEALS_ERROR, error });
    });
};
