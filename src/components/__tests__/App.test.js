// @ts-nocheck
import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../../container/App';

afterEach(cleanup);

describe('Component', () => {
  test('should render Categories', () => {
    render(<App />, { initialState: { filter: 'Chicken' } });
    expect(<App />).toMatchSnapshot();
  });
});
