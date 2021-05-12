/*
 * GeneralInfoForm Messages
 *
 * This contains all the text for the GeneralInfoForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.EditBusinessInfoScreen.GeneralInfoForm';

export default defineMessages({
  storeNameLabel: {
    id: `${scope}.storeNameLabel`,
    defaultMessage: 'Store name',
  },
  addressLabel: {
    id: `${scope}.addressLabel`,
    defaultMessage: 'Address',
  },
  phoneLabel: {
    id: `${scope}.phoneLabel`,
    defaultMessage: 'Mobile number',
  },
  websiteLabel: {
    id: `${scope}.websiteLabel`,
    defaultMessage: 'Website',
  },
  infoLabel: {
    id: `${scope}.infoLabel`,
    defaultMessage: 'Info',
  },
});
