import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/core';
import RNSplashScreen from 'react-native-splash-screen';

import { useAuthentication } from 'containers/Authentication';
import { useUserLocation } from 'containers/UserLocation';

import { Log } from 'platform/Logger';
import { deepLinkingHandler } from 'router/utils';
import { ACCOUNT_SELECTION, CITY_SELECTION, HOME } from 'router/routeNames';

interface IUserAccountProps {
  navigation: any;
}

const UserAccount = ({ navigation }: IUserAccountProps) => {
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
        routes: [{ name: initialRoute.routeName, params: initialRoute.params }],
      });
      return;
    }

    if (authentication.isAuthenticated) {
      if (userLocation?.data?.cityName) {
        RNSplashScreen.hide();
        navigation.reset({
          index: 0,
          routes: [
            {
              name: HOME,
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
    if (authentication.localChecked) {
      onLoad();
    }
    // Linking.addEventListener('url', (e) => onLoad(e.url));
  }, [authentication.localChecked]);

  return null;
};

export default React.memo(UserAccount);
