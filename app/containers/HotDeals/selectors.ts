import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the HotDeals state domain
 */

const selectHotDealsDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by HotDeals
 */

const makeSelectHotDeals = () =>
  createSelector(selectHotDealsDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectHotDealsByKey = (key: string) =>
  createSelector(makeSelectHotDeals(), (state) => state[key]);

export default makeSelectHotDeals;
export { selectHotDealsDomain, selectHotDealsByKey };
