import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the EntitySearch state domain
 */

const selectEntitySearchDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by EntitySearch
 */

const makeSelectEntitySearch = () =>
  createSelector(selectEntitySearchDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectEntitySearch;
export { selectEntitySearchDomain };
