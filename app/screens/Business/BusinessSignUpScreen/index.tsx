/*
 *
 * BusinessSignUpScreen
 *
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { BUSINESS_HOME, CITY_SELECTION, LOGIN } from 'router/routeNames';

import { useBusinessAuthentication } from 'containers/Business/BusinessAuthentication';
import { useUserLocation } from 'containers/UserLocation';

import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import FullScreenLoader from 'theme/FullScreenLoader';
import ScreenHeading from 'theme/ScreenHeading';
import { useToastContext } from 'theme/Toast';
import Screen from 'theme/Screen';

import { BusinessSignUpScreenProps } from './types';
import messages from './messages';
import style from './style';
import Form from './Form';

const BusinessSignUpScreen: React.FC<BusinessSignUpScreenProps> = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const businessAuthentication = useBusinessAuthentication();
  const userLocation = useUserLocation();
  const toast = useToastContext();

  useEffect(() => {
    businessAuthentication.reset();
    return businessAuthentication.reset;
  }, []);

  useEffect(() => {
    const { user } = businessAuthentication;
    if (!user.data?.name) {
      return;
    }
    toast?.show({
      message: businessAuthentication.message,
      delay: 1000,
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
  }, [businessAuthentication]);

  useEffect(() => {
    if (businessAuthentication.error) {
      toast?.show({
        message: businessAuthentication.message,
        delay: 1000,
        type: 'error',
      });
      setShowLoader(false);
    }
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
};

export default React.memo(BusinessSignUpScreen);
