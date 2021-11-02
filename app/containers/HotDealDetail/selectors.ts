import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the HotDealDetail state domain
 */

const selectHotDealDetailDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by HotDealDetail
 */

const makeSelectHotDealDetail = () =>
  createSelector(selectHotDealDetailDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectHotDealDetailByKey = (key: string) =>
  createSelector(makeSelectHotDealDetail(), (state) => state[key]);

export default makeSelectHotDealDetail;
export { selectHotDealDetailDomain, selectHotDealDetailByKey };
