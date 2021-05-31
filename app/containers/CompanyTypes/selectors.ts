import { createSelector } from 'reselect';
import { initialState, name as STORE_KEY } from './slice';

/**
 * Direct selector to the companyTypes state domain
 */

const selectCompanyTypesDomain = (state) => state[STORE_KEY] || initialState;

/**
 * Default selector used by companyTypes
 */

const makeSelectCompanyTypes = () =>
  createSelector(selectCompanyTypesDomain, (subState) => subState);

/**
 * Other specific selectors
 */

export default makeSelectCompanyTypes;
export { selectCompanyTypesDomain };
