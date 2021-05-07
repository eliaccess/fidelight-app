/*
 *
 * ProfileEditScreen
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
import { ProfileEditScreenProps } from './types';

function ProfileEditScreen(props: ProfileEditScreenProps) {
  return (
    <>
      <Screen
        testID="ProfileEditScreen"
        headerTitle={<FormattedMessage {...messages.title} isFragment />}
      >
        <View style={style.container}>
          <View style={style.formContainer}>
            <Form onSubmit={() => props.navigation.navigate(HOME, {})} />
          </View>
        </View>
      </Screen>
    </>
  );
}

export default ProfileEditScreen;
