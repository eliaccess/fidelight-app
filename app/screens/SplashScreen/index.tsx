/*
 *
 * SplashScreen
 *
 */

import React, { useEffect, useState } from 'react';
import RNSplashScreen from 'react-native-splash-screen';

import { ACCOUNT_SELECTION } from 'router/routeNames';
import LocalStorage from 'platform/LocalStorage';
import configs from 'configs';

import { SplashScreenProps } from './types';
import UserAccount from './UserAccount';
import BusinessAccount from './BusinessAccount';

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const [accountType, setAccountType] = useState('');

  // @ts-ignore
  useEffect(async () => {
    const type = await LocalStorage.getItem(configs.ACCOUNT_TYPE);
    if (type) {
      setAccountType(type);
      return;
    }
    RNSplashScreen.hide();
    navigation.reset({
      index: 0,
      routes: [{ name: ACCOUNT_SELECTION }],
    });
  }, []);

  if (accountType === 'user') {
    return <UserAccount navigation={navigation} />;
  }

  if (accountType === 'business') {
    return <BusinessAccount navigation={navigation} />;
  }

  return null;
};

export default React.memo(SplashScreen);
