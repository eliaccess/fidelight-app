/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen';

export default defineMessages({
  headingLabel: {
    id: `${scope}.headingLabel`,
    defaultMessage: 'Welcome Login',
  },
  googleLabel: {
    id: `${scope}.googleLabel`,
    defaultMessage: 'Google',
  },
  facebookLabel: {
    id: `${scope}.facebookLabel`,
    defaultMessage: 'Facebook',
  },
  signUpPitch: {
    id: `${scope}.signUpPitch`,
    defaultMessage: "Don't have a Fidelight Account?",
  },
  signUpLabel: {
    id: `${scope}.signUpLabel`,
    defaultMessage: 'Create One',
  },
  termsLable: {
    id: `${scope}.termsLable`,
    defaultMessage: 'Terms of use & Privecy Policy',
  },
});
