import * as routeNames from './routeNames';

const routeConfigs = {
  [routeNames.SPLASH]: {
    path: '/',
  },
  [routeNames.HOME]: {
    path: '/',
  },
  [routeNames.ACCOUNT_SELECTION]: {
    path: '/account-selection',
  },
  [routeNames.LOGIN]: {
    path: '/login',
  },
  [routeNames.SIGNUP]: {
    path: '/sign-up',
  },
  [routeNames.COMMING_SOON]: {
    path: '/commingsoon',
  },
  [routeNames.EXPLORE]: {
    path: '/explore',
  },
  [routeNames.FAVOURITE_PLACES]: {
    path: '/favourite-places',
  },
  [routeNames.DEAL_LISTING]: {
    path: '/deal-listing',
  },
  [routeNames.ENTITY_DETAIL]: {
    path: '/entity-detail',
  },
  [routeNames.SUPPORT]: {
    path: '/support',
  },
  [routeNames.CHANGE_PASSWORD]: {
    path: '/change-password',
  },
  [routeNames.PREFERENCE]: {
    path: '/preference',
  },
  [routeNames.PROFILE]: {
    path: '/profile',
  },
  [routeNames.PROFILE_EDIT]: {
    path: '/profile-edit',
  },
  [routeNames.DEAL_DETAIL]: {
    path: '/deal-detail',
    options: { presentation: 'transparentModal' },
  },
  [routeNames.BUSINESS_LOGIN]: {
    path: '/business-login',
  },
  [routeNames.BUSINESS_SIGNUP]: {
    path: '/business-signUp',
  },
  [routeNames.BUSINESS_HOME]: {
    path: '/business-home',
  },
  [routeNames.BUSINESS_EXPLORE]: {
    path: '/business-explore',
  },
  [routeNames.BUSINESS_TRANSACTIONS]: {
    path: '/business-transactions',
  },
  [routeNames.EDIT_BUSINESS_INFO]: {
    path: '/edit-business-info',
  },
};

export default routeConfigs;
