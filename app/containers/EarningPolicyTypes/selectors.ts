import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the EarningPolicyTypes state domain
 */

const selectEarningPolicyTypesDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by EarningPolicyTypes
 */

const makeSelectEarningPolicyTypes = () =>
  createSelector(selectEarningPolicyTypesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectEarningPolicyTypes;
export { selectEarningPolicyTypesDomain };
