import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import IconButton from '../index';

describe('Icon Component', () => {
  it('call icon button on press', () => {
    const onPress = jest.fn();

    const testID = 'iconButton';

    const props = { testID, onPress, icon: { name: 'user' } };

    const { getByTestId } = render(<IconButton {...props} />);

    const iconButton = getByTestId(testID);

    fireEvent.press(iconButton);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
