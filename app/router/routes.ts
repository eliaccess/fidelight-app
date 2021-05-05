import HomeScreen from 'screens/HomeScreen/Loadable';
import AccountSelectionScreen from 'screens/AccountSelectionScreen/Loadable';
import LoginScreen from 'screens/LoginScreen/Loadable';
import SignUpScreen from 'screens/SignUpScreen/Loadable';
import CommingSoonScreen from 'screens/CommingSoonScreen/Loadable';
import ExploreScreen from 'screens/ExploreScreen/Loadable';
import FavouritePlacesScreen from 'screens/FavouritePlacesScreen/Loadable';
import DealListingScreen from 'screens/DealListingScreen/Loadable';
import EntityDetailScreen from 'screens/EntityDetailScreen/Loadable';
import SupportScreen from 'screens/SupportScreen/Loadable';
import ChangePasswordScreen from 'screens/ChangePasswordScreen/Loadable';
import PreferenceScreen from 'screens/PreferenceScreen/Loadable';
import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';

const routes = {
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
  [routeNames.FAVOURITE_PLACES]: {
    ...routeConfigs[routeNames.FAVOURITE_PLACES],
    screen: FavouritePlacesScreen,
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
  // [routeNames.FORGET_PASSWORD]: {
  //   ...routeConfigs[routeNames.FORGET_PASSWORD],
  //   screen: ForgetPasswordScreen,
  // },
};

export default routes;
