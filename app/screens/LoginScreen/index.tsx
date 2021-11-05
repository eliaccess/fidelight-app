/* eslint-disable react-hooks/exhaustive-deps */
/*
 *
 * LoginScreen
 *
 */

import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';

import { useAuthentication } from 'containers/Authentication';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import SocialLogin from 'theme/SocialLogin';
import ScreenHeading from 'theme/ScreenHeading';
import Separator from 'theme/Separator';
import ErrorMessage from 'theme/ErrorMessage';
import FullScreenLoader from 'theme/FullScreenLoader';
import { useToastContext } from 'theme/Toast';
import {
  BUSINESS_HOME,
  FORGET_PASSWORD,
  HOME,
  SIGNUP,
} from 'router/routeNames';

import EmailPasswordForm from './EmailPasswordForm';
import messages from './messages';
import style from './style';
import { LoginScreenProps } from './types';

function LoginScreen(props: LoginScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const toast = useToastContext();

  const authentication = useAuthentication();
  const heading = useFormattedMessage(messages.headingLabel);

  useEffect(() => {
    const { user } = authentication;
    if (!user.data?.name) {
      return;
    }
    toast?.show({
      message: authentication.message,
      delay: 3000,
      type: 'success',
    });

    props.navigation.reset({
      index: 0,
      routes: [
        {
          name:
            authentication.accountType === 'business' ? BUSINESS_HOME : HOME,
        },
      ],
    });
  }, [authentication]);

  useEffect(() => {
    if (authentication.error) {
      toast?.show({
        message: authentication.message,
        delay: 3000,
        type: 'error',
      });
      setShowLoader(false);
    }
  }, [authentication.error]);

  useEffect(() => {
    authentication.reset();
    return authentication.reset;
  }, []);

  return (
    <>
      <Screen testID="loginScreen">
        <View style={style.container}>
          <ScreenHeading heading={heading} />
          {authentication.error ? (
            <ErrorMessage text={authentication.error} />
          ) : null}
          <View style={style.formContainer}>
            <EmailPasswordForm
              onSubmit={(value) => {
                authentication.login({
                  provider: 'local',
                  medium:
                    Platform.OS === 'ios' ? 'platform-ios' : 'platform-android',
                  data: {
                    email: value.email,
                    password: value.password,
                  },
                });
              }}
              onForgotPasswordPress={() =>
                props.navigation.navigate(FORGET_PASSWORD, {})
              }
            />
          </View>
          <View style={style.buttonContainer}>
            <Separator />
            <SocialLogin
              setShowLoader={setShowLoader}
              onSuccess={(data) => authentication.login(data)}
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
      {showLoader ||
      authentication.fetchingRemoteToken ||
      authentication.user.fetching ? (
        <FullScreenLoader />
      ) : null}
    </>
  );
}

export default LoginScreen;
