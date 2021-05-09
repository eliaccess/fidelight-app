/*
 * BusinessTransactionScreen.CreateRewardForm Messages
 *
 * This contains all the text for the BusinessTransactionScreen.CreateRewardForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.BusinessTransactionScreen.CreateRewardForm';

export default defineMessages({
  numberOfPointsLabel: {
    id: `${scope}.numberOfPointsLabel`,
    defaultMessage: 'Number of point',
  },
  scanQrCodeLabel: {
    id: `${scope}.scanQrCodeLabel`,
    defaultMessage: 'Scan Qr code',
  },
  addLabel: {
    id: `${scope}.addLabel`,
    defaultMessage: 'Add',
  },
});
