/*
 * ExploreScreen Messages
 *
 * This contains all the text for the ExploreScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.ExploreScreen';
export default defineMessages({
  categoriesHeading: {
    id: `${scope}.categoriesHeading`,
    defaultMessage: 'Categories',
  },
  termsHeading: {
    id: `${scope}.termsHeading`,
    defaultMessage: 'Terms of use',
  },
  contactUsHeading: {
    id: `${scope}.contactUsHeading`,
    defaultMessage: 'Contact us',
  },
});
