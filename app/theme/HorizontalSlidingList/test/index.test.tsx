import React from 'react';
import { render } from '@testing-library/react-native';

import Text from 'theme/Text';
import HorizontalSlidingList from '../index';

it('Render HorizontalSlidingList', () => {
  const children = <Text>Hello</Text>;

  const list = render(
    <HorizontalSlidingList>{children}</HorizontalSlidingList>,
  );

  expect(list).toBeDefined();
});
