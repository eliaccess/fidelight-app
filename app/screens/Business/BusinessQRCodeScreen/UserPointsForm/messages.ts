/*
 * BusinessQRCodeScreen Messages
 *
 * This contains all the text for the BusinessQRCodeScreen component.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.Business.BusinessQRCodeScreen.UserPointsForm';

export default defineMessages({
  inputPlaceholder: {
    id: `${scope}.inputPlaceholder`,
    defaultMessage: 'Enter Amount',
  },
  heading: {
    id: `${scope}.heading`,
    defaultMessage: 'Price Spent by you',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Submit',
  },
  inputError: {
    id: `${scope}.inputError`,
    defaultMessage: 'Please enter amount',
  },
});
