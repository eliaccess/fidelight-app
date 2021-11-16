/*
 * BusinessExploreScreen.CreateOfferForm Messages
 *
 * This contains all the text for the BusinessExploreScreen.CreateOfferForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.BusinessExploreScreen.CreateOfferForm';

export default defineMessages({
  offerNameLabel: {
    id: `${scope}.offerNameLabel`,
    defaultMessage: 'Offer name',
  },
  discountDescriptionLabel: {
    id: `${scope}.discountDescriptionLabel`,
    defaultMessage: 'Discount description',
  },
  offerTypeLabel: {
    id: `${scope}.offerTypeLabel`,
    defaultMessage: 'Offer type',
  },
  startDateLabel: {
    id: `${scope}.startDateLabel`,
    defaultMessage: 'Start date',
  },
  endDateLabel: {
    id: `${scope}.endDateLabel`,
    defaultMessage: 'End date',
  },
  addLabel: {
    id: `${scope}.addLabel`,
    defaultMessage: 'Add',
  },
  discountValueLabel: {
    id: `${scope}.discountValueLabel`,
    defaultMessage: 'Add Discount',
  },
});
