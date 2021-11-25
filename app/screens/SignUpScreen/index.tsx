/*
 *
 * SignUpScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useAuthentication } from 'containers/Authentication';
import { useUserLocation } from 'containers/UserLocation';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import SocialLogin from 'theme/SocialLogin';
import ScreenHeading from 'theme/ScreenHeading';
import Separator from 'theme/Separator';
import FullScreenLoader from 'theme/FullScreenLoader';
import { useToastContext } from 'theme/Toast';

import { BUSINESS_HOME, CITY_SELECTION, HOME, LOGIN } from 'router/routeNames';

import EmailPasswordForm from './Form';
import messages from './messages';
import style from './style';
import { SignUpScreenProps } from './types';

function SignUpScreen(props: SignUpScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const authentication = useAuthentication();
  const userLocation = useUserLocation();
  const toast = useToastContext();

  useEffect(() => {
    authentication.reset();
    return authentication.reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  },
                });
              }}
            />
          </View>
          <View style={style.buttonContainer}>
            <Separator />
            <SocialLogin
              setShowLoader={setShowLoader}
              onSuccess={(resp) =>
                authentication.signUp({
                  ...resp,
                  data: {
                    ...resp.data,
                    surname: '',
                    phone: '',
                    birthdate: '',
                    password: '',
                  },
                })
              }
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
