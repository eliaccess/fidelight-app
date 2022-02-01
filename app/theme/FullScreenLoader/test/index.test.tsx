import React from 'react';
import { render } from '@testing-library/react-native';
import FullScreenLoader from '../index';

it('render loader component', () => {
  const loader = render(<FullScreenLoader />);

  loader.getByTestId('FullScreenLoader');

  expect(loader).toBeTruthy();
});
