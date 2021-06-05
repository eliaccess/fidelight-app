import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the Resturants state domain
 */

const selectResturantsDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by Resturants
 */

const makeSelectResturants = () =>
  createSelector(selectResturantsDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectResturantsByKey = (key: string) =>
  createSelector(makeSelectResturants(), (state) => state[key]);

export default makeSelectResturants;
export { selectResturantsDomain, selectResturantsByKey };
