/*
 *
 * BusinessSignUpScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import ScreenHeading from 'theme/ScreenHeading';

import { BUSINESS_HOME, CITY_SELECTION, LOGIN } from 'router/routeNames';
import { useBusinessAuthentication } from 'containers/Business/BusinessAuthentication';
import { useUserLocation } from 'containers/UserLocation';
import { useToastContext } from 'theme/Toast';
import FullScreenLoader from 'theme/FullScreenLoader';

import Form from './Form';
import messages from './messages';
import style from './style';
import { BusinessSignUpScreenProps } from './types';

function BusinessSignUpScreen(props: BusinessSignUpScreenProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const businessAuthentication = useBusinessAuthentication();
  const userLocation = useUserLocation();
  const toast = useToastContext();

  useEffect(() => {
    businessAuthentication.reset();
    return businessAuthentication.reset;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    if (
      userLocation?.data?.cityName ||
      businessAuthentication.accountType === 'business'
    ) {
      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: BUSINESS_HOME,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessAuthentication.error]);

  const heading = useFormattedMessage(messages.headingLabel);
  return (
    <>
      <Screen
        testID="BusinessSignUpScreen"
        onBackPress={() => {
          if (activeStep === 1) {
            props.navigation.goBack();
            return;
          }
          setActiveStep(1);
        }}
      >
        <View style={style.container}>
          <ScreenHeading heading={heading} />
          <FormattedMessage
            {...messages.stepLabel}
            values={{ activeStep }}
            style={style.stepLabel}
          />
          <View style={style.formContainer}>
            <Form
              onStepChange={(stp) => setActiveStep(stp)}
              activeStep={activeStep}
              onSubmit={(data) => {
                businessAuthentication.signUp({
                  provider: 'local',
                  data: {
                    name: data.companyName,
                    password: data.password,
                    email: data.email,
                    description: data.description,
                    phone: data.phone,
                    companyType: data.companyType,
                    country: data.country,
                    city: data.city,
                    streetName: data.streetName,
                    streetNumber: data.streetNumber,
                  },
                });
              }}
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
      businessAuthentication.submitting ||
      businessAuthentication.fetchingRemoteToken ||
      businessAuthentication.user.fetching ? (
        <FullScreenLoader />
      ) : null}
    </>
  );
}

export default BusinessSignUpScreen;
