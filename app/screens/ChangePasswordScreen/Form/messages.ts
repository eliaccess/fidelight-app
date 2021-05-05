/*
 * SignUpScreen.Form Messages
 *
 * This contains all the text for the SignUpScreen.Form component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SignUpScreen.Form';

export default defineMessages({
  usernameLabel: {
    id: `${scope}.usernameLabel`,
    defaultMessage: 'User Name',
  },
  oldPasswordLabel: {
    id: `${scope}.oldPasswordLabel`,
    defaultMessage: 'Old Password',
  },
  newPasswordLabel: {
    id: `${scope}.newPasswordLabel`,
    defaultMessage: 'New Password',
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: 'Confirm Password',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Submit',
  },
});
