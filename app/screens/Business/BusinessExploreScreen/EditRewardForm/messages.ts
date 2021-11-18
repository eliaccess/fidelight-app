/*
 * BusinessExploreScreen.CreateRewardForm Messages
 *
 * This contains all the text for the BusinessExploreScreen.CreateRewardForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.BusinessExploreScreen.CreateRewardForm';

export default defineMessages({
  offerNameLabel: {
    id: `${scope}.offerNameLabel`,
    defaultMessage: 'Offer name',
  },
  rewardDescriptionLabel: {
    id: `${scope}.rewardDescriptionLabel`,
    defaultMessage: 'Discount description',
  },
  rewardTypeLabel: {
    id: `${scope}.rewardTypeLabel`,
    defaultMessage: 'Reward Type',
  },
  rewardsPointsLabel: {
    id: `${scope}.rewardsPointsLabel`,
    defaultMessage: 'Points to collected to avail offer',
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
