/* eslint-disable no-param-reassign */
// @ts-nocheck
import produce from 'immer';
import { LOAD_CATEGORIES_BEGIN, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_ERROR } from '../actions/index';

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case LOAD_CATEGORIES_SUCCESS:
      draft.loading = false;
      draft.categories = action.payload;
      return;
    case LOAD_CATEGORIES_ERROR:
      draft.error = action.error;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
