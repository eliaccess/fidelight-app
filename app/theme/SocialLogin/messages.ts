/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen';

export default defineMessages({
  googleLabel: {
    id: `${scope}.googleLabel`,
    defaultMessage: 'Google',
  },
  appleLabel: {
    id: `${scope}.appleLabel`,
    defaultMessage: 'Continue with Apple',
  },
  facebookLabel: {
    id: `${scope}.facebookLabel`,
    defaultMessage: 'Facebook',
  },
});
