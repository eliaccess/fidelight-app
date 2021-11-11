import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/core';
import RNSplashScreen from 'react-native-splash-screen';
import { useBusinessAuthentication } from 'containers/Business/BusinessAuthentication';
import { useUserLocation } from 'containers/UserLocation';

import { Log } from 'platform/Logger';

import { deepLinkingHandler } from 'router/utils';
import {
  ACCOUNT_SELECTION,
  BUSINESS_HOME,
  CITY_SELECTION,
} from 'router/routeNames';

interface IBusinessAccountProps {
  navigation: any;
}

const BusinessAccount = ({ navigation }: IBusinessAccountProps) => {
  const businessAuthentication = useBusinessAuthentication();
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

    if (businessAuthentication.isAuthenticated) {
      if (userLocation?.data?.cityName) {
        RNSplashScreen.hide();
        navigation.reset({
          index: 0,
          routes: [
            {
              name: BUSINESS_HOME,
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
    }
    RNSplashScreen.hide();
    navigation.reset({
      index: 0,
      routes: [
        {
          name: ACCOUNT_SELECTION,
        },
      ],
    });
  };

  useEffect(() => {
    if (businessAuthentication.localChecked) {
      onLoad();
    }
    // Linking.addEventListener('url', (e) => onLoad(e.url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessAuthentication.localChecked]);

  return null;
};

export default React.memo(BusinessAccount);
