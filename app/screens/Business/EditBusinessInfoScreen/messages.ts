/*
 * EditBusinessInfoScreen Messages
 *
 * This contains all the text for the EditBusinessInfoScreen component.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.Business.EditBusinessInfoScreen';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Edit Business Info',
  },
  businessImageHeading: {
    id: `${scope}.businessImageHeading`,
    defaultMessage: 'Business Image',
  },
  addLogoLabel: {
    id: `${scope}.addLogoLabel`,
    defaultMessage: 'Add Logo',
  },
  addBusinessImage: {
    id: `${scope}.addBusinessImage`,
    defaultMessage: 'Add Business Image',
  },
  addBusinessImageLabel: {
    id: `${scope}.addBusinessImageLabel`,
    defaultMessage: 'Add Image',
  },
  generalInformationHeading: {
    id: `${scope}.generalInformationHeading`,
    defaultMessage: 'General Information',
  },
  earningPolicyHeading: {
    id: `${scope}.earningPolicyHeading`,
    defaultMessage: 'Earning Policy',
  },
  availabilityLabel: {
    id: `${scope}.availabilityLabel`,
    defaultMessage: 'Availability',
  },
});
