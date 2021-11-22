/*
 *
 * DateSelector
 *
 */

import React, { useState } from 'react';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Text from 'theme/Text';

import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'theme/Icon';
import style from './style';

type DateSelectorProps = {
  onSelect: (...args: any) => any;
  label: string | React.ReactNode;
  error?: string | null;
  value?: string;
};

function DateSelector(props: DateSelectorProps) {
  const [value, setValue] = useState(props?.value || '');

  const [openDatePicker, setOpenDatePicker] = useState(false);

  return (
    <>
      <TouchFeedback
        onPress={() => setOpenDatePicker(true)}
        style={style.container}
      >
        {value ? (
          <>
            <Text style={style.heading}>{props.label}</Text>
            <Text stye={style.value}>{value}</Text>
          </>
        ) : (
          <Text style={style.label}>{props.label}</Text>
        )}
        <Icon name="calendar" style={style.icon} />
      </TouchFeedback>
      <DateTimePickerModal
        isVisible={openDatePicker}
        mode="date"
        onConfirm={(date) => {
          setOpenDatePicker(false);
          setValue(date.toISOString().split('T')[0]);
          props.onSelect(date.toISOString().split('T')[0]);
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
      {props.error ? <Text style={style.error}>{props.error}</Text> : null}
    </>
  );
}

export default React.memo(DateSelector);
