import SplashScreen from 'screens/SplashScreen';
import HomeScreen from 'screens/HomeScreen/Loadable';
import AccountSelectionScreen from 'screens/AccountSelectionScreen/Loadable';
import LoginScreen from 'screens/LoginScreen/Loadable';
import SignUpScreen from 'screens/SignUpScreen/Loadable';
import CommingSoonScreen from 'screens/CommingSoonScreen/Loadable';
import ExploreScreen from 'screens/ExploreScreen/Loadable';
import FavoriteEntitiesScreen from 'screens/FavoriteEntitiesScreen/Loadable';
import DealListingScreen from 'screens/DealListingScreen/Loadable';
import EntityDetailScreen from 'screens/EntityDetailScreen/Loadable';
import SupportScreen from 'screens/SupportScreen/Loadable';
import ChangePasswordScreen from 'screens/ChangePasswordScreen/Loadable';
import PreferenceScreen from 'screens/PreferenceScreen/Loadable';
import ProfileScreen from 'screens/ProfileScreen/Loadable';
import ProfileEditScreen from 'screens/ProfileEditScreen/Loadable';
import DealDetailScreen from 'screens/DealDetailScreen/Loadable';
import BusinessLoginScreen from 'screens/Business/BusinessLoginScreen/Loadable';
import BusinessSignUpScreen from 'screens/Business/BusinessSignUpScreen/Loadable';
import BusinessHomeScreen from 'screens/Business/BusinessHomeScreen/Loadable';
import BusinessExploreScreen from 'screens/Business/BusinessExploreScreen/Loadable';
import BusinessTransactionsScreen from 'screens/Business/BusinessTransactionsScreen/Loadable';
import EditBusinessInfoScreen from 'screens/Business/EditBusinessInfoScreen/Loadable';
import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
  [routeNames.SPLASH]: {
    ...routeConfigs[routeNames.SPLASH],
    screen: SplashScreen,
  },
  [routeNames.HOME]: {
    ...routeConfigs[routeNames.HOME],
    screen: HomeScreen,
  },
  [routeNames.ACCOUNT_SELECTION]: {
    ...routeConfigs[routeNames.ACCOUNT_SELECTION],
    screen: AccountSelectionScreen,
  },
  [routeNames.LOGIN]: {
    ...routeConfigs[routeNames.LOGIN],
    screen: LoginScreen,
  },
  [routeNames.SIGNUP]: {
    ...routeConfigs[routeNames.SIGNUP],
    screen: SignUpScreen,
  },
  [routeNames.COMMING_SOON]: {
    ...routeConfigs[routeNames.COMMING_SOON],
    screen: CommingSoonScreen,
  },
  [routeNames.EXPLORE]: {
    ...routeConfigs[routeNames.EXPLORE],
    screen: ExploreScreen,
  },
  [routeNames.FAVORITE_ENTITIES]: {
    ...routeConfigs[routeNames.FAVORITE_ENTITIES],
    screen: FavoriteEntitiesScreen,
  },
  [routeNames.DEAL_LISTING]: {
    ...routeConfigs[routeNames.DEAL_LISTING],
    screen: DealListingScreen,
  },
  [routeNames.ENTITY_DETAIL]: {
    ...routeConfigs[routeNames.ENTITY_DETAIL],
    screen: EntityDetailScreen,
  },
  [routeNames.SUPPORT]: {
    ...routeConfigs[routeNames.SUPPORT],
    screen: SupportScreen,
  },
  [routeNames.CHANGE_PASSWORD]: {
    ...routeConfigs[routeNames.CHANGE_PASSWORD],
    screen: ChangePasswordScreen,
  },
  [routeNames.PREFERENCE]: {
    ...routeConfigs[routeNames.PREFERENCE],
    screen: PreferenceScreen,
  },
  [routeNames.PROFILE]: {
    ...routeConfigs[routeNames.PROFILE],
    screen: ProfileScreen,
  },
  [routeNames.PROFILE_EDIT]: {
    ...routeConfigs[routeNames.PROFILE_EDIT],
    screen: ProfileEditScreen,
  },
  [routeNames.BUSINESS_LOGIN]: {
    ...routeConfigs[routeNames.BUSINESS_LOGIN],
    screen: BusinessLoginScreen,
  },
  [routeNames.BUSINESS_SIGNUP]: {
    ...routeConfigs[routeNames.BUSINESS_SIGNUP],
    screen: BusinessSignUpScreen,
  },
  [routeNames.BUSINESS_HOME]: {
    ...routeConfigs[routeNames.BUSINESS_HOME],
    screen: BusinessHomeScreen,
  },
  [routeNames.BUSINESS_EXPLORE]: {
    ...routeConfigs[routeNames.BUSINESS_EXPLORE],
    screen: BusinessExploreScreen,
  },
  [routeNames.BUSINESS_TRANSACTIONS]: {
    ...routeConfigs[routeNames.BUSINESS_TRANSACTIONS],
    screen: BusinessTransactionsScreen,
  },
  [routeNames.EDIT_BUSINESS_INFO]: {
    ...routeConfigs[routeNames.EDIT_BUSINESS_INFO],
    screen: EditBusinessInfoScreen,
  },
  [routeNames.DEAL_DETAIL]: {
    ...routeConfigs[routeNames.DEAL_DETAIL],
    screen: DealDetailScreen,
  },

  // [routeNames.FORGET_PASSWORD]: {
  //   ...routeConfigs[routeNames.FORGET_PASSWORD],
  //   screen: ForgetPasswordScreen,
  // },
};

export default routes;
