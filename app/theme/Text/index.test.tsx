import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import Text from './index';

describe('<Text />', () => {
  test('Print Text value', async () => {
    const testID = 'text';

    const Label = "Hello! I'm Text Component";

    const { getByTestId } = await render(<Text testID={testID}>{Label}</Text>);

    const text = getByTestId(testID);

    expect(text.children).toEqual([Label]);
  });
});
