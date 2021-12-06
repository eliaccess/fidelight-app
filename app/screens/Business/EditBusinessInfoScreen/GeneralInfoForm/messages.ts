/*
 * GeneralInfoForm Messages
 *
 * This contains all the text for the GeneralInfoForm component.
 */

import { defineMessages } from 'react-intl';

export const scope =
  'app.screens.Business.EditBusinessInfoScreen.GeneralInfoForm';

export default defineMessages({
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Store name',
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Store Email',
  },
  companyTypeLabel: {
    id: `${scope}.companyTypeLabel`,
    defaultMessage: 'Company Type',
  },
  streetNameLabel: {
    id: `${scope}.streetNameLabel`,
    defaultMessage: 'Street Name',
  },
  streetNumberLabel: {
    id: `${scope}.streetNumberLabel`,
    defaultMessage: 'Street Number',
  },
  cityLabel: {
    id: `${scope}.cityLabel`,
    defaultMessage: 'City',
  },
  countryLabel: {
    id: `${scope}.countryLabel`,
    defaultMessage: 'Country',
  },
  phoneLabel: {
    id: `${scope}.phoneLabel`,
    defaultMessage: 'Mobile number',
  },
  websiteLabel: {
    id: `${scope}.websiteLabel`,
    defaultMessage: 'Website',
  },
  descriptionLabel: {
    id: `${scope}.descriptionLabel`,
    defaultMessage: 'Description',
  },
  updateLabel: {
    id: `${scope}.updateLabel`,
    defaultMessage: 'Update General Info',
  },
});
