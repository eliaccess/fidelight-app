/*
 * BusinessProfileScreen Messages
 *
 * This contains all the text for the BusinessProfileScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.BusinessProfileScreen';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Comming Soon!',
  },
  openLabel: {
    id: `${scope}.openLabel`,
    defaultMessage: 'Open  ',
  },
  closesLabel: {
    id: `${scope}.closesLabel`,
    defaultMessage: 'Closes  ',
  },
  closedLabel: {
    id: `${scope}.closedLabel`,
    defaultMessage: 'Closed',
  },
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
  offerDetailLabel: {
    id: `${scope}.offerDetailLabel`,
    defaultMessage: 'Offer Detail',
  },
});
