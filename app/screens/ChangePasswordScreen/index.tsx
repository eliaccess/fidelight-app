/*
 *
 * ChangePasswordScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage from 'theme/FormattedMessage';

import { HOME } from 'router/routeNames';

import Form from './Form';
import messages from './messages';
import style from './style';
import { ChangePasswordScreenProps } from './types';

function ChangePasswordScreen(props: ChangePasswordScreenProps) {
  return (
    <>
      <Screen
        testID="ChangePasswordScreen"
        headerTitle={<FormattedMessage {...messages.title} isFragment />}
      >
        <View style={style.container}>
          <Form onSubmit={() => props.navigation.navigate(HOME, {})} />
        </View>
      </Screen>
    </>
  );
}

export default ChangePasswordScreen;
