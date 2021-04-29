/*
 * HomeHeader Messages
 *
 * This contains all the text for the HomeHeader component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.HomeHeader';

export default defineMessages({
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: 'John@mac.com',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: '********',
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: 'Confirm Password',
  },
  confirmPasswordPlaceholder: {
    id: `${scope}.confirmPasswordPlaceholder`,
    defaultMessage: '********',
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
