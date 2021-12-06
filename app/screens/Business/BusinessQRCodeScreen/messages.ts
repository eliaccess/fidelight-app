/*
 * BusinessQRCodeScreen Messages
 *
 * This contains all the text for the BusinessQRCodeScreen component.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.Business.BusinessQRCodeScreen';

export default defineMessages({
  qrCodeHeading: {
    id: `${scope}.qrCodeHeading`,
    defaultMessage: 'QR Code',
  },
  scanToAvailLabel: {
    id: `${scope}.scanToAvailLabel`,
    defaultMessage: 'Scan to avail offer',
  },
  asBusinessLabel: {
    id: `${scope}.asBusinessLabel`,
    defaultMessage: 'Continue as business',
  },
});
