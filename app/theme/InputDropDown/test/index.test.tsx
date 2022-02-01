import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import InputDropDown from '../index';

describe('<InputDropDown />', () => {
  const data = [
    {
      id: 1,
      name: 'Saeed',
    },
    {
      id: 2,
      name: 'Ahmed',
    },
  ];

  it('Display DropDownModal', async () => {
    const onSelect = jest.fn();
    const listItemTestID = `listItem-${data[0].name}`;
    const input = render(
      <InputDropDown
        data={data}
        label="Name Selector"
        title="Select Name"
        onSelect={onSelect}
      />,
    );
    const dropDownButton = input.getByTestId('Chevron_Button');
    await fireEvent.press(dropDownButton);
    expect(input.getByTestId('DropdownModal')).toBeDefined();
    const firstItem = input.getByTestId(listItemTestID);
    expect(firstItem).toBeTruthy();
  });

  it('Hide DropDownModal', async () => {
    const onSelect = jest.fn();
    const firstItem = data[0].name;

    const input = render(
      <InputDropDown
        data={data}
        label="Name Selector"
        title="Select Name"
        onSelect={onSelect}
      />,
    );
    const dropDownButton = input.getByTestId('Chevron_Button');
    fireEvent.press(dropDownButton); // setState(true);
    await fireEvent.press(dropDownButton); // call again to // setState(false);
    expect(input.queryByText(firstItem)).toBeNull(); // now dropdown list item should not be shown
  });

  it('onSelect is called when item is pressed', async () => {
    const onSelect = jest.fn();
    const listItemTestID = `listItem-${data[0].name}`;
    const input = render(
      <InputDropDown
        data={data}
        label="Name Selector"
        title="Select Name"
        onSelect={onSelect}
      />,
    );
    const dropDownButton = input.getByTestId('Chevron_Button');
    await fireEvent.press(dropDownButton);
    expect(input.getByTestId('DropdownModal')).toBeDefined();
    const firstItem = input.getByTestId(listItemTestID);
    expect(firstItem).toBeTruthy();
    fireEvent.press(firstItem);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
