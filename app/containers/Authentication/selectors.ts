import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the authentication state domain
 */

const selectAuthenticationDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by Authentication
 */

const makeSelectAuthentication = () =>
  createSelector(selectAuthenticationDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectAuthentication;
export { selectAuthenticationDomain };
