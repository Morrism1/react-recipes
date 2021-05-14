import { createSelector } from 'reselect';

const getCategory = (state) => state.categories.categories.categories;
const getProps = (state, props) => props.strCategory;

const getMealsByCategory = createSelector(
  getCategory,
  getProps,
  (categories, strCategory) => categories.find(
    (c) => c.strCategory === strCategory,
  ),
);

export default getMealsByCategory;
