/* eslint-disable no-param-reassign */
// @ts-nocheck
import produce from 'immer';
import { LOAD_MEALDATA_BEGIN, LOAD_MEALDATA_SUCCESS, LOAD_MEALDATA_ERROR } from '../actions/index';

const initialState = {
  mealData: [],
  loading: false,
  error: null,
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_MEALDATA_BEGIN:
      draft.loading = true;
      draft.error = null;
      return;
    case LOAD_MEALDATA_SUCCESS:
      draft.loading = false;
      draft.mealData = action.payload;
      return;
    case LOAD_MEALDATA_ERROR:
      draft.error = action.error;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
