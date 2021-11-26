import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the RecentViewedEntities state domain
 */

const selectRecentViewedEntitiesDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by RecentViewedEntities
 */

const makeSelectRecentViewedEntities = () =>
  createSelector(selectRecentViewedEntitiesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectRecentViewedEntities;
export { selectRecentViewedEntitiesDomain };
