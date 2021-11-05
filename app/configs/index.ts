import { HOME } from 'router/routeNames';

const configs = {
  VERSION: '0.0.1',
  initialRouteName: HOME,
  initialRouteParams: {},
  LOG_API: false,
  LOG_ANALYTICS: false,
  ACCOUNT_TYPE: 'accountType',
  // API_DOMAIN: 'http://localhost:4000',
  API_DOMAIN: 'https://api.fidelight.fr',
  AUTH_ACCESS_TOKEN_KEY: 'AuthAccessToken',
  AUTH_REFRESH_TOKEN_KEY: 'AuthRefreshToken',
  AUTH_QR_CODE_KEY: 'AuthQRCode',
  USER_DETAIL_KEY: 'Fidelight/UserDetails',
  FACEBOOK_PERMISSIONS: ['email', 'public_profile'],
  GOOGLE_WEB_CLIENT_ID:
    '904148149532-m1c3eh7mht2pgtem84ieeu51h9lnis6m.apps.googleusercontent.com',
  PLAY_STORE_LINK: '',
  ITUNES_LINK: '',
  CONTACT_NUMBER: '',
  WHATSAPP_NUMBER: '',
  CONTACT_EMAIL: '',
  DOWNLOAD_URL: '',
  SEARCH_LIMIT: 5,
  USER_LOCATION: 'fideLight/user/location',
};

export default configs;
