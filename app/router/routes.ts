import HomeScreen from 'screens/HomeScreen';
import LoginSignUpSelectionScreen from 'screens/LoginSignUpSelectionScreen/Loadable';
import LoginScreen from 'screens/LoginScreen/Loadable';
import SignUpScreen from 'screens/SignUpScreen/Loadable';
import PersonalInfoScreen from 'screens/PersonalInfoScreen/Loadable';
import PhoneVerificationScreen from 'screens/PhoneVerificationScreen/Loadable';
import ForgetPasswordScreen from 'screens/ForgetPasswordScreen/Loadable';
import ChangePasswordScreen from 'screens/ChangePasswordScreen/Loadable';
import SearchScreen from 'screens/SearchScreen';
import EntityDetailScreen from 'screens/EntityDetailScreen/Loadable';
import ExploreScreen from 'screens/ExploreScreen/Loadable';
import AppointmentBookingScreen from 'screens/AppointmentBookingScreen/Loadable';
import CommingSoonScreen from 'screens/CommingSoonScreen/Loadable';
import OnBoardingScreen from 'screens/OnBoardingScreen/Loadable';
import routeConfigs from './routeConfigs';
import * as routeNames from './routeNames';
import { LeftToRightAnimation, RightToLeftAnimation } from './animations';

const routes = {
  [routeNames.HOME]: {
    ...routeConfigs[routeNames.HOME],
    screen: HomeScreen,
  },
  [routeNames.LOGIN_SIGNUP_SELECTION]: {
    ...routeConfigs[routeNames.LOGIN_SIGNUP_SELECTION],
    screen: LoginSignUpSelectionScreen,
  },
  [routeNames.LOGIN]: {
    ...routeConfigs[routeNames.LOGIN],
    screen: LoginScreen,
    options: LeftToRightAnimation,
  },
  [routeNames.SIGNUP]: {
    ...routeConfigs[routeNames.SIGNUP],
    screen: SignUpScreen,
    options: RightToLeftAnimation,
  },
  [routeNames.PERSONAL_INFO]: {
    ...routeConfigs[routeNames.PERSONAL_INFO],
    screen: PersonalInfoScreen,
  },
  [routeNames.PHONE_VERIFICATION]: {
    ...routeConfigs[routeNames.PHONE_VERIFICATION],
    screen: PhoneVerificationScreen,
  },
  [routeNames.FORGET_PASSWORD]: {
    ...routeConfigs[routeNames.FORGET_PASSWORD],
    screen: ForgetPasswordScreen,
  },
  [routeNames.CHANGE_PASSWORD]: {
    ...routeConfigs[routeNames.CHANGE_PASSWORD],
    screen: ChangePasswordScreen,
  },
  [routeNames.SEARCH]: {
    ...routeConfigs[routeNames.SEARCH],
    screen: SearchScreen,
    options: RightToLeftAnimation,
  },
  [routeNames.ENTITY_DETAIL]: {
    ...routeConfigs[routeNames.ENTITY_DETAIL],
    screen: EntityDetailScreen,
  },
  [routeNames.EXPLORE]: {
    ...routeConfigs[routeNames.EXPLORE],
    screen: ExploreScreen,
  },
  [routeNames.APPOINTMENT_BOOKING]: {
    ...routeConfigs[routeNames.APPOINTMENT_BOOKING],
    screen: AppointmentBookingScreen,
    options: RightToLeftAnimation,
  },
  [routeNames.COMMING_SOON]: {
    ...routeConfigs[routeNames.COMMING_SOON],
    screen: CommingSoonScreen,
  },
  [routeNames.ON_BOARDING]: {
    ...routeConfigs[routeNames.ON_BOARDING],
    screen: OnBoardingScreen,
  },
};

export default routes;
