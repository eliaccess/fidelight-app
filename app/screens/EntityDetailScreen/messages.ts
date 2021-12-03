/*
 * EntityDetailScreen Messages
 *
 * This contains all the text for the EntityDetail screen.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.EntityDetailScreen';

export default defineMessages({
  weeksDealHeading: {
    id: `${scope}.weeksDealHeading`,
    defaultMessage: "Week's Deal",
  },
  seeAllLabel: {
    id: `${scope}.seeAllLabel`,
    defaultMessage: 'See All',
  },
  rewardsHeading: {
    id: `${scope}.rewardsHeading`,
    defaultMessage: 'Rewards',
  },
  makePointsLabel: {
    id: `${scope}.makePointsLabel`,
    defaultMessage: '{points} points left to avail the offer',
  },
});
