/*
 *
 * SignUpScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { BUSINESS_HOME, CITY_SELECTION, HOME, LOGIN } from 'router/routeNames';

import { useAuthentication } from 'containers/Authentication';
import { useUserLocation } from 'containers/UserLocation';

import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import FullScreenLoader from 'theme/FullScreenLoader';
import ScreenHeading from 'theme/ScreenHeading';
import { useToastContext } from 'theme/Toast';
import SocialLogin from 'theme/SocialLogin';
import Separator from 'theme/Separator';
import Screen from 'theme/Screen';

import { SignUpScreenProps } from './types';
import EmailPasswordForm from './Form';
import messages from './messages';
import style from './style';

function SignUpScreen(props: SignUpScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const authentication = useAuthentication();
  const userLocation = useUserLocation();
  const toast = useToastContext();

  useEffect(() => {
    authentication.reset();
    return authentication.reset;
  }, []);

  useEffect(() => {
    const { user } = authentication;

    if (!user.data?.name) {
      return;
    }

    toast?.show({
      message: authentication.message,
      delay: 500,
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
        delay: 500,
        type: 'error',
      });
      setShowLoader(false);
    }
  }, [authentication.error]);

  const heading = useFormattedMessage(messages.headingLabel);

  return (
    <>
      <Screen testID="SignUpScreen" headerVisibilityThreshold={20}>
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
                  },
                });
              }}
            />
          </View>

          <View style={style.buttonContainer}>
            <Separator />
            <SocialLogin
              setShowLoader={setShowLoader}
              onSuccess={(data) => authentication.signUp(data)}
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

export default React.memo(SignUpScreen);
