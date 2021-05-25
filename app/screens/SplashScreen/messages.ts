/*
 * SplashScreenScreen Messages
 *
 * This contains all the text for the SplashScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.SplashScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SplashScreen screen!',
  },
});
