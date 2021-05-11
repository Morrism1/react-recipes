import getCategories from '../api';

export const LOAD_CATEGORIES_BEGIN = 'LOAD_CATEGORIES_BEGIN';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_ERROR = 'LOAD_CATEGORIES_ERROR';

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
