/*
 * ProfileEditScreen.Form Messages
 *
 * This contains all the text for the ProfileEditScreen.Form component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.ProfileEditScreen.Form';

export default defineMessages({
  surnameLabel: {
    id: `${scope}.surnameLabel`,
    defaultMessage: 'Surname',
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
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
  birthdateLabel: {
    id: `${scope}.birthdateLabel`,
    defaultMessage: 'Date of Birth',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Save',
  },
});
