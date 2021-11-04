/*
 *
 * ChangePasswordScreen
 *
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useChangePassword } from 'containers/ChangePassword';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';

import Form from './Form';
import messages from './messages';
import style from './style';
import { ChangePasswordScreenProps } from './types';

function ChangePasswordScreen(props: ChangePasswordScreenProps) {
  const changePassword = useChangePassword();

  useEffect(() => {
    if (changePassword.success) {
      changePassword.reset();
      props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePassword?.success]);
  return (
    <>
      <Screen
        testID="ChangePasswordScreen"
        headerTitle={<FormattedMessage {...messages.title} isFragment />}
      >
        <View style={style.container}>
          <Form
            onSubmit={(values) => {
              changePassword.submit({ ...values });
            }}
          />
        </View>
      </Screen>
    </>
  );
}

export default ChangePasswordScreen;
