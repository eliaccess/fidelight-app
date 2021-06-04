import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the UserProfile state domain
 */

const selectUserProfileDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by UserProfile
 */

const makeSelectUserProfile = () =>
  createSelector(selectUserProfileDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectUserProfile;
export { selectUserProfileDomain };
