import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the citiesSearch state domain
 */

const selectCitiesSearchDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by CitiesSearch
 */

const makeSelectCitiesSearch = () =>
  createSelector(selectCitiesSearchDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectCitiesSearch;
export { selectCitiesSearchDomain };
