/*
 * ChangePasswordScreen.Form Messages
 *
 * This contains all the text for the ChangePasswordScreen.Form component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.ChangePasswordScreen.Form';

export default defineMessages({
  currentPasswordLabel: {
    id: `${scope}.currentPasswordLabel`,
    defaultMessage: 'Current Password',
  },
  newPasswordLabel: {
    id: `${scope}.newPasswordLabel`,
    defaultMessage: 'New Password',
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: 'Confirm Password',
  },
  submitButtonLabel: {
    id: `${scope}.submitButtonLabel`,
    defaultMessage: 'Submit',
  },
});
