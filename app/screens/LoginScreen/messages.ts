/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen';

export default defineMessages({
  headingLabel: {
    id: `${scope}.headingLabel`,
    defaultMessage: 'Welcome Login',
  },
  signUpPitch: {
    id: `${scope}.signUpPitch`,
    defaultMessage: "Don't have a Fidelight Account?",
  },
  signUpLabel: {
    id: `${scope}.signUpLabel`,
    defaultMessage: 'Create One',
  },
});
