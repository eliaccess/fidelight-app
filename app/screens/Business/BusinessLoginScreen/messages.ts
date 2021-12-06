/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.Business.BusinessLoginScreen';

export default defineMessages({
  headingLabel: {
    id: `${scope}.headingLabel`,
    defaultMessage: 'Fidelight partner login',
  },
  signUpPitch: {
    id: `${scope}.signUpPitch`,
    defaultMessage: "Don't have a Fidelight Business Account?",
  },
  signUpLabel: {
    id: `${scope}.signUpLabel`,
    defaultMessage: 'Create One',
  },
  loginSuccessMessage: {
    id: `${scope}.loginSuccessMessage`,
    defaultMessage: 'Login Successfully',
  },
});
