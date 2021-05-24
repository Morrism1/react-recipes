import reducer from './categories';

const meal = [{
  idCategory: '1',
  strCategory: 'Beef',
  strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
  strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
}];

test('LOAD_CATEGORIES_SUCCESS load all categories', () => {
  const newState = reducer(undefined, { type: 'LOAD_CATEGORIES_SUCCESS', payload: meal });
  expect(newState.categories.length).toBe(1);
  expect(newState.categories[0].idCategory).toBe('1');
});

test('LOAD_CATEGORIES_SUCCESS loading should be false', () => {
  const newState = reducer(undefined, { type: 'LOAD_CATEGORIES_SUCCESS', payload: meal });
  expect(newState.loading).toBe(false);
});

test('LOAD_CATEGORIES_SUCCESS error to be null', () => {
  const newState = reducer(undefined, { type: 'LOAD_CATEGORIES_SUCCESS', payload: meal });
  expect(newState.error).toBe(null);
});
