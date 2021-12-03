/*
 * AccountSelectionScreen Messages
 *
 * This contains all the text for the AccountSelection screen.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.AccountSelectionScreen';

export default defineMessages({
  chooseOptionHeading: {
    id: `${scope}.chooseOptionHeading`,
    defaultMessage: 'Choose one option',
  },
  asUserLabel: {
    id: `${scope}.asUserLabel`,
    defaultMessage: 'Continue as user',
  },
  asBusinessLabel: {
    id: `${scope}.asBusinessLabel`,
    defaultMessage: 'Continue as business',
  },
});
