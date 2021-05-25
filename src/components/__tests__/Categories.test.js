import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import { render } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import Categories from '../Categories';

afterEach(cleanup);

it('Renders the connected app with initialState', () => {
  render(<Categories />, {
    initialState: {
      categories: {
        categories: {
          categories: [{
            idCategory: '1',
            strCategory: 'Beef',
            strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
            strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
          }],
        },
        loading: false,
        error: null,
      },
    },
  });

  expect(screen.getByText(/Beef is the culinary name /i)).toBeInTheDocument();
});

describe('Component', () => {
  test('should render Categories', () => {
    render(<Categories />, {
      initialState: {
        categories: {
          categories: {
            categories: [{
              idCategory: '1',
              strCategory: 'Beef',
              strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
              strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
            }],
          },
          loading: false,
          error: null,
        },
      },
    });
    expect(<Categories />).toMatchSnapshot();
  });
});
