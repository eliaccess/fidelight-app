import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the Transactions state domain
 */

const selectTransactionsDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by Transactions
 */

const makeSelectTransactions = () =>
  createSelector(selectTransactionsDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectTransactions;
export { selectTransactionsDomain };
