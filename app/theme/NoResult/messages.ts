/*
 * NoResult Messages
 *
 * This contains all the text for the NoResult component.
 */
import { defineMessages } from 'react-intl';
const scope = 'app.components.NoResult';

export default defineMessages({
  msg: {
    id: `${scope}.msg`,
    defaultMessage: 'No items for desired filter.',
  },
  reset: {
    id: `${scope}.reset`,
    defaultMessage: 'Reset Filter',
  },
});
