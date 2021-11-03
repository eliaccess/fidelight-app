import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the EntityOffersRewards state domain
 */

const selectEntityOffersRewardsDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by EntityOffersRewards
 */

const makeSelectEntityOffersRewards = () =>
  createSelector(selectEntityOffersRewardsDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectEntityOffersRewardsByKey = (key: string) =>
  createSelector(makeSelectEntityOffersRewards(), (state) => state[key]);

export default makeSelectEntityOffersRewards;
export { selectEntityOffersRewardsDomain, selectEntityOffersRewardsByKey };
