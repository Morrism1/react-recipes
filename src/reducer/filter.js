/* eslint-disable no-param-reassign */
// @ts-nocheck
import produce from 'immer';
import { CHANGE_FILTER } from '../actions/index';

const initialState = {
  filter: 'Current',
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      draft.filter = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
