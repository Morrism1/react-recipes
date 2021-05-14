/* eslint-disable no-param-reassign */
// @ts-nocheck
import produce from 'immer';
import { LOAD_MEALS_BEGIN, LOAD_MEALS_SUCCESS, LOAD_MEALS_ERROR } from '../actions/index';

const initialState = {
  meals: [],
  loading: false,
  error: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_MEALS_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case LOAD_MEALS_SUCCESS:
      draft.loading = false;
      draft.meals = action.payload;
      return;
    case LOAD_MEALS_ERROR:
      draft.error = action.error;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
