/*
 * PreferenceScreen Messages
 *
 * This contains all the text for the PreferenceScreen component.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.PreferenceScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Preference Management',
  },
  connectGoogleLabel: {
    id: `${scope}.connectGoogleLabel`,
    defaultMessage: 'Connect with Google Account',
  },
  connectFacebookLabel: {
    id: `${scope}.connectFacebookLabel`,
    defaultMessage: 'Connect with Facebook Account',
  },
  addPasswordLabel: {
    id: `${scope}.addPasswordLabel`,
    defaultMessage: 'Add Password',
  },
  removeGoogleLabel: {
    id: `${scope}.removeGoogleLabel`,
    defaultMessage: 'Remove Google Account',
  },
  removeFacebookLabel: {
    id: `${scope}.removeFacebookLabel`,
    defaultMessage: 'Remove Facebook Account',
  },
});
