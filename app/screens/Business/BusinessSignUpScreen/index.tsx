/*
 *
 * BusinessSignUpScreen
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';

import Screen from 'theme/Screen';
import FormattedMessage, { useFormattedMessage } from 'theme/FormattedMessage';
import ScreenHeading from 'theme/ScreenHeading';

import { HOME, LOGIN } from 'router/routeNames';

import Form from './Form';
import messages from './messages';
import style from './style';
import { BusinessSignUpScreenProps } from './types';

function BusinessSignUpScreen(props: BusinessSignUpScreenProps) {
  const heading = useFormattedMessage(messages.headingLabel);
  const [activeStep, setActiveStep] = useState(1);
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
              onSubmit={() => props.navigation.navigate(HOME, {})}
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

export default BusinessSignUpScreen;
