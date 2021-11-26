import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the RecentSelectedCities state domain
 */

const selectRecentSelectedCitiesDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by RecentSelectedCities
 */

const makeSelectRecentSelectedCities = () =>
  createSelector(selectRecentSelectedCitiesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectRecentSelectedCities;
export { selectRecentSelectedCitiesDomain };
