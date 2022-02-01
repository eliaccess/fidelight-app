import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import Input from '../index';

const COUNTRY_NAME = 'Serbia';

it('<Input />', async () => {
  const testID = 'inputTestIDas';

  const onChangeMock = jest.fn();
  const { getByTestId } = await render(
    <Input testID={testID} onChangeText={onChangeMock} />,
  );

  const textInput = getByTestId(testID);
  fireEvent(textInput, 'focus');
  fireEvent.changeText(textInput, COUNTRY_NAME);
  expect(onChangeMock).toHaveBeenCalledWith(COUNTRY_NAME);
});
