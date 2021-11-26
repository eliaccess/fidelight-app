/*
 * RecentWidget Messages
 *
 * This contains all the text for the RecentWidget component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.RecentWidget';

export default defineMessages({
  heading: {
    id: `${scope}.heading`,
    defaultMessage: '{heading}',
  },
  recentViewedEntities: {
    id: `${scope}.recentViewedEntities`,
    defaultMessage: 'Recently Viewed Entities',
  },
});
