/*
 *
 * UserPointsForm
 *
 */

import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import Button from 'theme/Button';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import { useToastContext } from 'theme/Toast';

import messages from './messages';
import style from './style';

type UserPointsFormProps = {
  onSubmit: (...args: any[]) => void;
};

function UserPointsForm(props: UserPointsFormProps) {
  const [value, setValue] = useState('');
  const placeholder = useFormattedMessage(messages.inputPlaceholder);
  const inputError = useFormattedMessage(messages.inputError);
  const toast = useToastContext();

  return (
    <View style={style.container}>
      <FormattedMessage {...messages.heading} style={style.heading} />
      <TextInput
        style={style.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        keyboardType="numeric"
      />
      <View style={style.submitButtonHolder}>
        <Button
          onPress={() => {
            if (!value) {
              toast?.show({
                message: inputError,
                delay: 1000,
                type: 'error',
              });
              return;
            }
            props.onSubmit(value);
          }}
          label={<FormattedMessage {...messages.submitLabel} isFragment />}
        />
      </View>
    </View>
  );
}

export default React.memo(UserPointsForm);
