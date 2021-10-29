import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the Entities state domain
 */

const selectEntitiesDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by Entities
 */

const makeSelectEntities = () =>
  createSelector(selectEntitiesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

const selectEntitiesByKey = (key: string) =>
  createSelector(makeSelectEntities(), (state) => state[key]);

export default makeSelectEntities;
export { selectEntitiesDomain, selectEntitiesByKey };
