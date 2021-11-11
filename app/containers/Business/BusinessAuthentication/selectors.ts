import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the businessAuthentication state domain
 */

const selectBusinessAuthenticationDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by businessAuthentication
 */

const makeSelectBusinessAuthentication = () =>
  createSelector(selectBusinessAuthenticationDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectBusinessAuthentication;
export { selectBusinessAuthenticationDomain };
