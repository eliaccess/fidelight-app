/*
 *
 * LoginScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import SocialLogin from 'theme/SocialLogin';
import ScreenHeading from 'theme/ScreenHeading';
import Separator from 'theme/Separator';
import { FORGET_PASSWORD, HOME, SIGNUP } from 'router/routeNames';

import EmailPasswordForm from './EmailPasswordForm';
import messages from './messages';
import style from './style';
import { LoginScreenProps } from './types';

function LoginScreen(props: LoginScreenProps) {
  const heading = useFormattedMessage(messages.headingLabel);
  return (
    <>
      <Screen testID="loginScreen">
        <View style={style.container}>
          <ScreenHeading heading={heading} />
          <View style={style.formContainer}>
            <EmailPasswordForm
              onSubmit={() => props.navigation.navigate(HOME, {})}
              onForgotPasswordPress={() =>
                props.navigation.navigate(FORGET_PASSWORD, {})
              }
            />
          </View>
          <View style={style.buttonContainer}>
            <Separator />
            <SocialLogin
              setShowLoader={() => null}
              onSuccess={() => null}
              onFailure={() => {}}
            />
          </View>
        </View>
      </Screen>
      <View style={style.signUpContainer}>
        <FormattedMessage {...messages.signUpPitch} style={style.signUpPitch} />
        <FormattedMessage
          {...messages.signUpLabel}
          style={[style.signUpPitch, style.signUpLabel]}
          onPress={() => props.navigation.navigate(SIGNUP, {})}
        />
      </View>
    </>
  );
}

export default LoginScreen;
