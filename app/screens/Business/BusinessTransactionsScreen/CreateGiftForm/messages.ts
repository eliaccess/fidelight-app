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
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Submit',
  },
  scannerHeading: {
    id: `${scope}.scannerHeading`,
    defaultMessage: 'Scan qr code to pay!',
  },
  scannerButtonLabel: {
    id: `${scope}.scannerButtonLabel`,
    defaultMessage: 'Close',
  },
  qrCodeValue: {
    id: `${scope}.qrCodeValue`,
    defaultMessage: 'QR code => xxxxxxx',
  },
  formError: {
    id: `${scope}.formError`,
    defaultMessage: 'Please scan QR code or add points',
  },
});
