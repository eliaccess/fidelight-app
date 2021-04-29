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
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  phoneLabel: {
    id: `${scope}.phoneLabel`,
    defaultMessage: 'Phone',
  },
  dobLabel: {
    id: `${scope}.dobLabel`,
    defaultMessage: 'Date of Birth',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Password',
  },
  policyLable: {
    id: `${scope}.policyLable`,
    defaultMessage: 'I accept the policy and terms.',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Sign up',
  },
});
