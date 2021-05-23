import { createSelector } from 'reselect';

const getCategory = (state) => state.categories.categories.categories;
const getMeals = (state) => state.meals.meals.meals;
const getProps = (state, props) => props.strCategory;
const parseCourseId = (state, props) => props.idMeal;

const getMealsByCategory = createSelector(
  getCategory,
  getProps,
  (categories, strCategory) => categories.find(
    (c) => c.strCategory === strCategory,
  ),
);

const getMealDataById = createSelector(
  getMeals,
  parseCourseId,
  (meals, idMeal) => meals.find((meal) => meal.idMeal === idMeal),
);

export { getMealsByCategory, getMealDataById };
