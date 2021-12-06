/*
 *
 * BusinessLoginScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, View } from 'react-native';

import {
  BUSINESS_HOME,
  FORGET_PASSWORD,
  BUSINESS_SIGNUP,
} from 'router/routeNames';

import { useBusinessAuthentication } from 'containers/Business/BusinessAuthentication';

import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import FullScreenLoader from 'theme/FullScreenLoader';
import ScreenHeading from 'theme/ScreenHeading';
import { useToastContext } from 'theme/Toast';
import Screen from 'theme/Screen';

import EmailPasswordForm from './EmailPasswordForm';
import { BusinessLoginScreenProps } from './types';
import messages from './messages';
import style from './style';

function BusinessLoginScreen(props: BusinessLoginScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const toast = useToastContext();

  const businessAuthentication = useBusinessAuthentication();

  const heading = useFormattedMessage(messages.headingLabel);

  useEffect(() => {
    const { user } = businessAuthentication;
    if (!user.data?.name) {
      return;
    }
    toast?.show({
      message: businessAuthentication.message,
      delay: 500,
      type: 'success',
    });

    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: BUSINESS_HOME,
        },
      ],
    });
  }, [businessAuthentication]);

  useEffect(() => {
    if (businessAuthentication.error) {
      toast?.show({
        message: businessAuthentication.message,
        delay: 500,
        type: 'error',
      });
      setShowLoader(false);
    }
  }, [businessAuthentication.error]);

  useEffect(() => {
    businessAuthentication.reset();
    return businessAuthentication.reset;
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
      <Screen testID="BusinessLoginScreen">
        <View style={style.container}>
          <ScreenHeading heading={heading} />
          <View style={style.formContainer}>
            <EmailPasswordForm
              onSubmit={(value) => {
                businessAuthentication.login({
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
            onPress={() => props.navigation.navigate(BUSINESS_SIGNUP, {})}
          />
        </View>
      ) : null}

      {showLoader ||
      businessAuthentication.fetchingRemoteToken ||
      businessAuthentication.user.fetching ? (
        <FullScreenLoader />
      ) : null}
    </>
  );
}

export default React.memo(BusinessLoginScreen);
