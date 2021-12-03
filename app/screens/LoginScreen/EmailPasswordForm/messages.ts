/*
 * LoginScreen.EmailPasswordForm Messages
 *
 * This contains all the text for the LoginScreen.EmailPasswordForm.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.LoginScreen.EmailPasswordForm';

export default defineMessages({
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  rememberMeLabel: {
    id: `${scope}.rememberMeLabel`,
    defaultMessage: 'Remember Me',
  },
  forgotPasswordLabel: {
    id: `${scope}.forgotPasswordLabel`,
    defaultMessage: 'Forgot Password?',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Login',
  },
});
