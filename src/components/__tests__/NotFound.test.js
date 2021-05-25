import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotFoundPage from '../NotFound';

describe('Component', () => {
  test('should render AC button', () => {
    const { getByText } = render(<NotFoundPage />);
    const link = getByText(/404 Not Found/i);
    expect(link).toBeInTheDocument();
  });

  it('same content with the snapshot', () => {
    const { getByText } = render(<NotFoundPage />);
    const text = getByText('404 Not Found');
    expect(text).toMatchSnapshot();
  });
});
