/*
 * SignUpScreen Messages
 *
 * This contains all the text for the SignUpScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.SignUpScreen';

export default defineMessages({
  headingLabel: {
    id: `${scope}.headingLabel`,
    defaultMessage: 'New Here? Sign Up',
  },
  subHeadingLabel: {
    id: `${scope}.subHeadingLabel`,
    defaultMessage: 'sign in to continue.',
  },
  googleLabel: {
    id: `${scope}.googleLabel`,
    defaultMessage: 'Google',
  },
  facebookLabel: {
    id: `${scope}.facebookLabel`,
    defaultMessage: 'Facebook',
  },
  signInPitch: {
    id: `${scope}.signInPitch`,
    defaultMessage: 'Already have Fidelight Account?',
  },
  signInLabel: {
    id: `${scope}.signInLabel`,
    defaultMessage: 'Sign in',
  },
});
