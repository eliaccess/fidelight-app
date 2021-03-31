import * as routeNames from './routeNames';

const routeConfigs = {
  [routeNames.HOME]: {
    path: '/',
  },
  [routeNames.LOGIN_SIGNUP_SELECTION]: {
    path: '/login-signUp-selection',
  },
  [routeNames.LOGIN]: {
    path: '/login',
  },
  [routeNames.SIGNUP]: {
    path: '/sign-up',
  },
  [routeNames.PERSONAL_INFO]: {
    path: '/personal-info',
  },
  [routeNames.PHONE_VERIFICATION]: {
    path: '/phone-verification',
  },
  [routeNames.FORGET_PASSWORD]: {
    path: '/forget-password',
  },
  [routeNames.CHANGE_PASSWORD]: {
    path: '/change-password',
  },
  [routeNames.SEARCH]: {
    path: '/search',
  },
  [routeNames.ENTITY_DETAIL]: {
    path: '/entity-detail',
  },
  [routeNames.EXPLORE]: {
    path: '/explore',
  },
  [routeNames.APPOINTMENT_BOOKING]: {
    path: '/appointment-booking',
  },
  [routeNames.COMMING_SOON]: {
    path: '/comming-soon',
  },
  [routeNames.ON_BOARDING]: {
    path: '/onboarding',
  },
};

export default routeConfigs;
