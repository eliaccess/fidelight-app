/*
 * QRCodeScreen Messages
 *
 * This contains all the text for the QRCodeScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.QRCodeScreen';

export default defineMessages({
  qrCodeHeading: {
    id: `${scope}.qrCodeHeading`,
    defaultMessage: 'QR Code',
  },
  scanToAvailLabel: {
    id: `${scope}.scanToAvailLabel`,
    defaultMessage: 'Scan to avail offer',
  },
});
