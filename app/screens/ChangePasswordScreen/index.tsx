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

import Form from './Form';
import messages from './messages';
import style from './style';
import { ChangePasswordScreenProps } from './types';

function ChangePasswordScreen(props: ChangePasswordScreenProps) {
  const changePassword = useChangePassword();
  const toast = useToastContext();

  useEffect(() => {
    if (changePassword.success) {
      toast?.show({
        message: changePassword.message,
        delay: 500,
        type: 'success',
      });
      changePassword.reset();
      props.navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePassword?.success]);

  useEffect(() => {
    if (changePassword.error) {
      toast?.show({
        message: changePassword.message,
        delay: 500,
        type: 'error',
      });
      changePassword.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changePassword.error]);
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
        {changePassword.submitting ? <FullScreenLoader /> : null}
      </Screen>
    </>
  );
}

export default ChangePasswordScreen;
