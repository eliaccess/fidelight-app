import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the BusinessEarningPolicies state domain
 */

const selectBusinessEarningPoliciesDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by BusinessEarningPolicies
 */

const makeSelectBusinessEarningPolicies = () =>
  createSelector(selectBusinessEarningPoliciesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectBusinessEarningPolicies;
export { selectBusinessEarningPoliciesDomain };
