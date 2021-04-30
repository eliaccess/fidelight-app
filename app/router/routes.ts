import HomeScreen from 'screens/HomeScreen/Loadable';
import AccountSelectionScreen from 'screens/AccountSelectionScreen/Loadable';
import LoginScreen from 'screens/LoginScreen/Loadable';
import SignUpScreen from 'screens/SignUpScreen/Loadable';
import CommingSoonScreen from 'screens/CommingSoonScreen/Loadable';
// import ForgetPasswordScreen from 'screens/ForgetPasswordScreen';
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
  // [routeNames.FORGET_PASSWORD]: {
  //   ...routeConfigs[routeNames.FORGET_PASSWORD],
  //   screen: ForgetPasswordScreen,
  // },
};

export default routes;
