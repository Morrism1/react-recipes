import {
  filter, loadCategories, loadMeals, loadMealDetails,
} from './index';

test('filter', () => {
  const value = filter();

  expect(value.type).toEqual('CHANGE_FILTER');
});

test('Load categories', () => {
  const result = loadCategories();
  expect(result).toEqual(expect.any(Function));
});

test('Load meals', () => {
  const result = loadMeals();
  expect(result).toEqual(expect.any(Function));
});

test('Load meal details', () => {
  const result = loadMealDetails();
  expect(result).toEqual(expect.any(Function));
});
