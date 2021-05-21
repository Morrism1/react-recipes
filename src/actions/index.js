import { getCategories, getMeals, getMealData } from '../api';

export const LOAD_CATEGORIES_BEGIN = 'LOAD_CATEGORIES_BEGIN';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR';

export const LOAD_MEALS_BEGIN = 'LOAD_MEALS_BEGIN';
export const LOAD_MEALS_SUCCESS = 'LOAD_MEALS_SUCCESS';
export const LOAD_MEALS_ERROR = 'LOAD_MEALS_ERROR';

export const LOAD_MEALDATA_BEGIN = 'LOAD_MEALDATA_BEGIN';
export const LOAD_MEALDATA_SUCCESS = 'LOAD_MEALDATA_SUCCESS';
export const LOAD_MEALDATA_ERROR = 'LOAD_MEALDATA_ERROR';

export const CHANGE_FILTER = 'CHANGE_FILTER';

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

export const loadMealDetails = (idMeal) => (dispatch) => {
  dispatch({ type: LOAD_MEALDATA_BEGIN });
  getMealData(idMeal)
    .then((mealData) => {
      dispatch({ type: LOAD_MEALDATA_SUCCESS, payload: mealData });
    })
    .catch((error) => {
      dispatch({ type: LOAD_MEALDATA_ERROR, error });
    });
};

export const filter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
