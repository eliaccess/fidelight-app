import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the BusinessTransactions state domain
 */

const selectBusinessTransactionsDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by BusinessTransactions
 */

const makeSelectBusinessTransactions = () =>
  createSelector(selectBusinessTransactionsDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectBusinessTransactions;
export { selectBusinessTransactionsDomain };
