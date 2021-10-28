/*
 *
 * SignUpScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';

import { useAuthentication } from 'containers/Authentication';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import SocialLogin from 'theme/SocialLogin';
import ScreenHeading from 'theme/ScreenHeading';
import Separator from 'theme/Separator';
import FullScreenLoader from 'theme/FullScreenLoader';
import { BUSINESS_HOME, HOME, LOGIN } from 'router/routeNames';

import EmailPasswordForm from './Form';
import messages from './messages';
import style from './style';
import { SignUpScreenProps } from './types';

function SignUpScreen(props: SignUpScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const authentication = useAuthentication();

  useEffect(() => {
    authentication.reset();
    return authentication.reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { user } = authentication;
    if (!user.data?.id) {
      return;
    }

    props.navigation.reset({
      index: 0,
      routes: [
        {
          name:
            authentication.accountType === 'business' ? BUSINESS_HOME : HOME,
        },
      ],
    });
  }, [props.navigation, authentication]);

  useEffect(() => {
    if (authentication.error) {
      setShowLoader(false);
    }
  }, [authentication.error]);

  const heading = useFormattedMessage(messages.headingLabel);

  return (
    <>
      <Screen testID="SignUpScreen">
        <View style={style.container}>
          <ScreenHeading heading={heading} />
          <View style={style.formContainer}>
            <EmailPasswordForm
              onSubmit={(data) => {
                authentication.signUp({
                  provider: 'local',
                  data: {
                    surname: data.surname,
                    email: data.email,
                    name: data.name,
                    password: data.password,
                    phone: data.phone,
                    birthdate: data.dob,
                    medium:
                      Platform.OS === 'ios'
                        ? 'platform-ios'
                        : 'platform-android',
                  },
                });
              }}
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
      {showLoader ||
      authentication.submitting ||
      authentication.fetchingRemoteToken ||
      authentication.user.fetching ? (
        <FullScreenLoader />
      ) : null}
    </>
  );
}

export default SignUpScreen;
