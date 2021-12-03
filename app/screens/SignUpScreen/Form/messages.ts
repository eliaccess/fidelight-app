/*
 * SignUpScreen.SignUpScreenForm Messages
 *
 * This contains all the text for the SignUpScreen.SignUpScreenForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.SignUpScreen.SignUpScreenForm';

export default defineMessages({
  surnameLabel: {
    id: `${scope}.surnameLabel`,
    defaultMessage: 'Surname',
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Name',
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
  policyLabel: {
    id: `${scope}.policyLabel`,
    defaultMessage: 'I accept the policy and terms.',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Sign up',
  },
  acceptPolicyMessage: {
    id: `${scope}.acceptPolicyMessage`,
    defaultMessage: 'Please accept the policy and terms.',
  },
});
