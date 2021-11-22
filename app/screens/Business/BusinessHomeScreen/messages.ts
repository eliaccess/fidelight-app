/*
 * BusinessHomeScreen Messages
 *
 * This contains all the text for the BusinessHomeScreen.
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.BusinessHomeScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Home Screen!',
  },
  logoutButtonLable: {
    id: `${scope}.logoutButtonLable`,
    defaultMessage: 'Logout',
  },
  termsHeading: {
    id: `${scope}.termsHeading`,
    defaultMessage: 'Terms of use',
  },
  contactUsHeading: {
    id: `${scope}.contactUsHeading`,
    defaultMessage: 'Contact us',
  },
  logoutSuccessMessage: {
    id: `${scope}.logoutSuccessMessage`,
    defaultMessage: 'Logged out successfully',
  },
});
