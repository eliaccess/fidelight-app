/* eslint-disable react-hooks/exhaustive-deps */
/*
 *
 * SplashScreen
 *
 */

import React, { useEffect } from 'react';
import RNSplashScreen from 'react-native-splash-screen';
import { useIsFocused } from '@react-navigation/native';

import { Log } from 'platform/Logger';
import { deepLinkingHandler } from 'router/utils';

import { useAuthentication } from 'containers/Authentication';
import { useUserLocation } from 'containers/UserLocation';

import {
  ACCOUNT_SELECTION,
  BUSINESS_HOME,
  CITY_SELECTION,
  HOME,
} from 'router/routeNames';

import { SplashProps } from './types';

function SplashScreen({ navigation }: SplashProps) {
  // const [showOnboarding, setShowOnboarding] = useState(false);
  const authentication = useAuthentication();
  const userLocation = useUserLocation();
  const isFocused = useIsFocused();

  const onLoad = async () => {
    const deepLink = await deepLinkingHandler();
    Log(JSON.stringify(deepLink));

    if (!isFocused) {
      return;
    }

    if (deepLink) {
      const { initialRoute } = deepLink;
      RNSplashScreen.hide();
      navigation.reset({
        index: 0,
        routes: [
          // @ts-ignore
          { name: initialRoute.routeName, params: initialRoute.params },
        ],
      });
      return;
    }

    if (authentication.isAuthenticated) {
      if (
        userLocation?.data?.cityName ||
        authentication.accountType === 'business'
      ) {
        RNSplashScreen.hide();
        navigation.reset({
          index: 0,
          routes: [
            {
              name:
                authentication.accountType === 'business'
                  ? BUSINESS_HOME
                  : HOME,
            },
          ],
        });
        return;
      }
      RNSplashScreen.hide();
      navigation.reset({
        index: 0,
        routes: [
          {
            name: CITY_SELECTION,
          },
        ],
      });
      return;
    }
    RNSplashScreen.hide();
    // setShowOnboarding(true);
    navigation.reset({
      index: 0,
      routes: [{ name: ACCOUNT_SELECTION }],
    });
  };

  useEffect(() => {
    if (authentication.localChecked) {
      onLoad();
    }
    // Linking.addEventListener('url', (e) => onLoad(e.url));
  }, [authentication.localChecked]);

  return null;
}

export default React.memo(SplashScreen);
