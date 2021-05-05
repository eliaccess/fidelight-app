/*
 * SupportScreen Messages
 *
 * This contains all the text for the SupportScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.SupportScreen';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Support',
  },
  requestTitleLabel: {
    id: `${scope}.requestTitleLabel`,
    defaultMessage: 'Request Title',
  },
  submitLabel: {
    id: `${scope}.submitLabel`,
    defaultMessage: 'Submit Request',
  },
  requestDetailsLabel: {
    id: `${scope}.requestDetailsLabel`,
    defaultMessage: 'Write here',
  },
});
