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
import { useToastContext } from 'theme/Toast';
import FullScreenLoader from 'theme/FullScreenLoader';

import { ChangePasswordScreenProps } from './types';

import Form from './Form';
import messages from './messages';
import style from './style';

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = (props) => {
  const changePassword = useChangePassword();
  const toast = useToastContext();

  useEffect(() => {
    if (changePassword.success) {
      toast?.show({
        message: changePassword.message,
        delay: 1000,
        type: 'success',
      });
      changePassword.reset();
      props.navigation.goBack();
    }
  }, [changePassword?.success]);

  useEffect(() => {
    if (changePassword.error) {
      toast?.show({
        message: changePassword.message,
        delay: 1000,
        type: 'error',
      });
      changePassword.reset();
    }
  }, [changePassword.error]);

  return (
    <Screen
      testID="ChangePasswordScreen"
      headerTitle={<FormattedMessage {...messages.title} isFragment />}
    >
      <View style={style.container}>
        <Form
          onSubmit={(values) => {
            changePassword.submit({ ...values });
          }}
          showCurrentPassword={props.route?.params?.showCurrentPassword}
        />
      </View>

      {changePassword.submitting ? <FullScreenLoader /> : null}
    </Screen>
  );
};

export default React.memo(ChangePasswordScreen);
