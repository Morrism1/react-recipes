import {
  filter, loadCategories, loadMeals, loadMealDetails,
} from './index';

const mockFetch = (data) => jest.fn().mockImplementation(() => Promise.resolve({
  ok: true,
  json: () => data,
}));

test('filter', () => {
  const value = filter();

  expect(value.type).toEqual('CHANGE_FILTER');
});

test('Load categories', () => {
  const mockDispatch = jest.fn;
  const result = loadCategories();
  expect(result).toEqual(expect.any(Function));
  loadCategories()(mockDispatch);
  expect(mockDispatch.call.length).toBe(1);
});

describe('load Categories', () => {
  it('fetches all categories', async () => {
    global.fetch = mockFetch({});
    const dispatch = jest.fn();
    await loadCategories()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOAD_CATEGORIES_BEGIN' });
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'LOAD_CATEGORIES_SUCCESS', payload: expect.any(Object) });
  });

  it('handles error', async () => {
    const error = { message: 'Not Found' };
    global.fetch = () => Promise.reject(error);
    const dispatch = jest.fn();
    await loadCategories()(dispatch);
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LOAD_CATEGORIES_BEGIN' });
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'LOAD_CATEGORIES_SUCCESS', payload: expect.any(Object) });
  });
});

test('Load meals', () => {
  const result = loadMeals();
  expect(result).toEqual(expect.any(Function));
});

test('Load meal details', () => {
  const result = loadMealDetails();
  expect(result).toEqual(expect.any(Function));
});
