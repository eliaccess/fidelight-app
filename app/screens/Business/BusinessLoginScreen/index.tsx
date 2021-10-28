/*
 *
 * BusinessLoginScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import ScreenHeading from 'theme/ScreenHeading';
import {
  BUSINESS_HOME,
  FORGET_PASSWORD,
  BUSINESS_SIGNUP,
} from 'router/routeNames';

import EmailPasswordForm from './EmailPasswordForm';
import messages from './messages';
import style from './style';
import { BusinessLoginScreenProps } from './types';

function BusinessLoginScreen(props: BusinessLoginScreenProps) {
  const heading = useFormattedMessage(messages.headingLabel);
  return (
    <>
      <Screen testID="BusinessLoginScreen">
        <View style={style.container}>
          <ScreenHeading heading={heading} />
          <View style={style.formContainer}>
            <EmailPasswordForm
              onSubmit={() => props.navigation.navigate(BUSINESS_HOME, {})}
              onForgotPasswordPress={() =>
                props.navigation.navigate(FORGET_PASSWORD, {})
              }
            />
          </View>
        </View>
      </Screen>
      <View style={style.signUpContainer}>
        <FormattedMessage {...messages.signUpPitch} style={style.signUpPitch} />
        <FormattedMessage
          {...messages.signUpLabel}
          style={[style.signUpPitch, style.signUpLabel]}
          onPress={() => props.navigation.navigate(BUSINESS_SIGNUP, {})}
        />
      </View>
    </>
  );
}

export default BusinessLoginScreen;
