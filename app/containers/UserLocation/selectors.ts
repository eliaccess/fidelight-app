import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the userLocation state domain
 */

const selectUserLocationDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by UserLocation
 */

const makeSelectUserLocation = () =>
  createSelector(selectUserLocationDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectUserLocation;
export { selectUserLocationDomain };
