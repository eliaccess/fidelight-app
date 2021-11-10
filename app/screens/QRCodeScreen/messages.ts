/*
 * QRcode Messages
 *
 * This contains all the text for the QRcode component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.components.QRcode';
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
    defaultMessage: 'Continue as bussiness',
  },
});
