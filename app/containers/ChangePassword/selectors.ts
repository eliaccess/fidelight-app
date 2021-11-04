import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the changePassword state domain
 */

const selectChangePasswordDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by ChangePassword
 */

const makeSelectChangePassword = () =>
  createSelector(selectChangePasswordDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectChangePassword;
export { selectChangePasswordDomain };
