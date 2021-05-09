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
  rewardsPointsLabel: {
    id: `${scope}.rewardsPointsLabel`,
    defaultMessage: 'Points to collected to avail offer',
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
});
