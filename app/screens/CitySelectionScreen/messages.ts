/**
 * CitySelectionScreen Messages
 *
 * This contains all the text for the CitySelectionScreen component.
 */
import { defineMessages } from 'react-intl';
const scope = 'app.screens.CitySelectionScreen';
export default defineMessages({
  pitch: {
    id: `${scope}.pitch`,
    defaultMessage: 'Search the nearby places and offers in your city',
  },
  searchPlaceholder: {
    id: `${scope}.searchPlaceholder`,
    defaultMessage: 'Search your city here',
  },
  cityLabel: {
    id: `${scope}.cityLabel`,
    defaultMessage: '{nom}',
  },
  recentSelectedCitiesLabel: {
    id: `${scope}.recentSelectedCitiesLabel`,
    defaultMessage: 'Recent selected cities',
  },
  popularCitiesLabel: {
    id: `${scope}.popularCitiesLabel`,
    defaultMessage: 'Popular Cities',
  },
});
