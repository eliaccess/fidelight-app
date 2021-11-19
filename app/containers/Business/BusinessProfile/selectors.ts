import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the BusinessProfile state domain
 */

const selectBusinessProfileDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by BusinessProfile
 */

const makeSelectBusinessProfile = () =>
  createSelector(selectBusinessProfileDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectBusinessProfile;
export { selectBusinessProfileDomain };
