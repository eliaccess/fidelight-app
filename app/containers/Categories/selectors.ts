import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the categories state domain
 */

const selectCategoriesDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by Categories
 */

const makeSelectCategories = () =>
  createSelector(selectCategoriesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectCategoriesByKey = (key: string) =>
  createSelector(makeSelectCategories(), (state) => state[key]);

export default makeSelectCategories;
export { selectCategoriesDomain, selectCategoriesByKey };
