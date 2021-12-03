/*
 * EntitySearchScreen Messages
 *
 * This contains all the text for the EntitySearch screen.
 *
 */

import { defineMessages } from 'react-intl';

const scope = 'app.screens.EntitySearchScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Search in town',
  },
  searchPlaceholder: {
    id: `${scope}.searchPlaceholder`,
    defaultMessage: 'Search for places here',
  },
  noResult: {
    id: `${scope}.noResult`,
    defaultMessage: 'No Result found',
  },
});
