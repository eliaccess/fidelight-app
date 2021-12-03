/*
 * ProfileScreen Messages
 *
 * This contains all the text for the ProfileScreen component.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.ProfileScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Profile',
  },
  changePasswordLabel: {
    id: `${scope}.changePasswordLabel`,
    defaultMessage: 'Change Password',
  },
  pastTransactionHeading: {
    id: `${scope}.pastTransactionHeading`,
    defaultMessage: 'Past Transactions',
  },
});
