/*
 * BusinessTransactionsScreen Messages
 *
 * This contains all the text for the BusinessTransactionsScreen component.
 *
 */

import { defineMessages } from 'react-intl';
const scope = 'app.screens.BusinessTransactionsScreen';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: '{title}',
  },
  transactionHeading: {
    id: `${scope}.transactionHeading`,
    defaultMessage: 'Transactions',
  },
  createGiftHeading: {
    id: `${scope}.createGiftHeading`,
    defaultMessage: 'Create New gift point',
  },
});
