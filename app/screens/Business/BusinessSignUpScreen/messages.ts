/*
 * BusinessSignUpScreen Messages
 *
 * This contains all the text for the BusinessSignUpScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.BusinessSignUpScreen';

export default defineMessages({
  headingLabel: {
    id: `${scope}.headingLabel`,
    defaultMessage: 'Fidelight partner Signup',
  },

  signInPitch: {
    id: `${scope}.signInPitch`,
    defaultMessage: 'Already have Fidelight Business Account?',
  },
  signInLabel: {
    id: `${scope}.signInLabel`,
    defaultMessage: 'Sign in',
  },
  stepLabel: {
    id: `${scope}.stepLabel`,
    defaultMessage: 'Step {activeStep}/2',
  },
});
