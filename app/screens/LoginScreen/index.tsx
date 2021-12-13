/*
 *
 * LoginScreen
 *
 */

import React, { useState, useEffect } from 'react';
import { Keyboard, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
  BUSINESS_HOME,
  CITY_SELECTION,
  FORGET_PASSWORD,
  HOME,
  SIGNUP,
} from 'router/routeNames';

import { useAuthentication } from 'containers/Authentication';
import { useUserLocation } from 'containers/UserLocation';

import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import Screen from 'theme/Screen';
import SocialLogin from 'theme/SocialLogin';
import ScreenHeading from 'theme/ScreenHeading';
import Separator from 'theme/Separator';
import ErrorMessage from 'theme/ErrorMessage';
import FullScreenLoader from 'theme/FullScreenLoader';
import { useToastContext } from 'theme/Toast';

import EmailPasswordForm from './EmailPasswordForm';
import messages from './messages';
import style from './style';
import { LoginScreenProps } from './types';

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [showLoader, setShowLoader] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  const toast = useToastContext();
  const authentication = useAuthentication();
  const userLocation = useUserLocation();
  const heading = useFormattedMessage(messages.headingLabel);

  useEffect(() => {
    const { user } = authentication;
    if (!user.data?.name) {
      return;
    }
    toast?.show({
      message: authentication.message,
      delay: 1000,
      type: 'success',
    });
    if (
      userLocation?.data?.cityName ||
      authentication.accountType === 'business'
    ) {
      props.navigation.reset({
        index: 0,
        routes: [
          {
            name:
              authentication.accountType === 'business' ? BUSINESS_HOME : HOME,
          },
        ],
      });
      return;
    }
    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: CITY_SELECTION,
        },
      ],
    });
  }, [authentication]);

  useEffect(() => {
    if (authentication.error) {
      toast?.show({
        message: authentication.message,
        delay: 1000,
        type: 'error',
      });
      setShowLoader(false);
    }
  }, [authentication.error]);

  useEffect(() => {
    authentication.reset();
    return authentication.reset;
  }, []);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidShow', () => {
      setShowFooter(false);
    });
    return () => listener.remove();
  }, []);

  useEffect(() => {
    const listener = Keyboard.addListener('keyboardDidHide', () => {
      setShowFooter(true);
    });
    return () => listener.remove();
  }, []);

  return (
    <>
      <Screen testID="loginScreen">
        <View style={style.container}>
          <Animatable.View animation="slideInLeft" duration={800}>
            <ScreenHeading heading={heading} />
          </Animatable.View>
          {authentication.error ? (
            <ErrorMessage text={authentication.error} />
          ) : null}
          <View style={style.formContainer}>
            <EmailPasswordForm
              onSubmit={(value) => {
                authentication.login({
                  provider: 'local',
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
          <Animatable.View
            style={style.buttonContainer}
            animation="fadeInUp"
            duration={800}
            delay={300}
          >
            <Separator />
            <SocialLogin
              setShowLoader={setShowLoader}
              onSuccess={(data) => authentication.login(data)}
              onFailure={() => {}}
            />
          </Animatable.View>
        </View>
      </Screen>
      {showFooter ? (
        <View style={style.signUpContainer}>
          <FormattedMessage
            {...messages.signUpPitch}
            style={style.signUpPitch}
          />
          <FormattedMessage
            {...messages.signUpLabel}
            style={[style.signUpPitch, style.signUpLabel]}
            onPress={() => props.navigation.navigate(SIGNUP, {})}
          />
        </View>
      ) : null}
      {showLoader ||
      authentication.fetchingRemoteToken ||
      authentication.user.fetching ? (
        <FullScreenLoader />
      ) : null}
    </>
  );
};

export default React.memo(LoginScreen);
