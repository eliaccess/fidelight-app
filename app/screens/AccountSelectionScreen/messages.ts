/*
 * AccountSelectionScreen Messages
 *
 * This contains all the text for the AccountSelectionScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screen.AccountSelectionScreen';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'AccountSelection Screen!',
  },
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
    defaultMessage: 'Continue as bussiness',
  },
});
