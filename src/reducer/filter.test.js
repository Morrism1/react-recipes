import reducer from './filter';

const value = 'Breakfast';

test('CHANGE_FILTER select filter', () => {
  const newState = reducer(undefined, { type: 'CHANGE_FILTER', payload: value });

  expect(newState.filter).toBe('Breakfast');
});
