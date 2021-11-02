import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the favoriteEntities state domain
 */

const selectFavoriteEntitiesDomain = (state) =>
  state[STORE_KEY] || initialState;

/**
 * Default selector used by favoriteEntities
 */

const makeSelectFavoriteEntities = () =>
  createSelector(selectFavoriteEntitiesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectFavoriteEntities;
export { selectFavoriteEntitiesDomain };
