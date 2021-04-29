/*
 *
 * SignUpScreen
 *
 */

import React from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import SocialLogin from 'theme/SocialLogin';
import ScreenHeading from 'theme/ScreenHeading';
import Separator from 'theme/Separator';
import { FORGET_PASSWORD, HOME, LOGIN } from 'router/routeNames';

import EmailPasswordForm from './Form';
import messages from './messages';
import style from './style';
import { SignUpScreenProps } from './types';

function SignUpScreen(props: SignUpScreenProps) {
  const heading = useFormattedMessage(messages.headingLabel);
  return (
    <>
      <Screen testID="SignUpScreen">
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
        <View style={style.signInContainer}>
          <FormattedMessage
            {...messages.signInPitch}
            style={style.signInPitch}
          />
          <FormattedMessage
            {...messages.signInLabel}
            style={[style.signInPitch, style.signInLabel]}
            onPress={() => props.navigation.navigate(LOGIN)}
          />
        </View>
      </Screen>
    </>
  );
}

export default SignUpScreen;
