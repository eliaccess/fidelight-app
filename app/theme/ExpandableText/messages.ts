/*
 * ExpandableText Messages
 *
 * This contains all the text for the ExpandableText component.
 */
import { defineMessages } from 'react-intl';
const scope = 'app.theme.ExpandableText';

export default defineMessages({
  more: {
    id: `${scope}.more`,
    defaultMessage: ' Show more',
  },
  less: {
    id: `${scope}.less`,
    defaultMessage: ' Show less',
  },
});
