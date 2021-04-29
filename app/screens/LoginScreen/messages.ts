/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LoginScreen screen!',
  },
  headingLabel: {
    id: `${scope}.headingLabel`,
    defaultMessage: 'Welcome Login',
  },
  subHeadingLabel: {
    id: `${scope}.subHeadingLabel`,
    defaultMessage: 'sign in to continue.',
  },
  socialLoginPitch: {
    id: `${scope}.socialLoginPitch`,
    defaultMessage: '_______________ OR _______________ ',
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
  loginSuccessMessage: {
    id: `${scope}.loginSuccessMessage`,
    defaultMessage: 'Login Successfully',
  },
  termsLable: {
    id: `${scope}.termsLable`,
    defaultMessage: 'Terms of use & Privecy Policy',
  },
});
