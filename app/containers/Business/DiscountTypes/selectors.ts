import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the DiscountTypes state domain
 */

const selectDiscountTypesDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by DiscountTypes
 */

const makeSelectDiscountTypes = () =>
  createSelector(selectDiscountTypesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectDiscountTypes;
export { selectDiscountTypesDomain };
