import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the EntityDetail state domain
 */

const selectEntityDetailDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by EntityDetail
 */

const makeSelectEntityDetail = () =>
  createSelector(selectEntityDetailDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectEntityDetailByKey = (key: string) =>
  createSelector(makeSelectEntityDetail(), (state) => state[key]);

export default makeSelectEntityDetail;
export { selectEntityDetailDomain, selectEntityDetailByKey };
