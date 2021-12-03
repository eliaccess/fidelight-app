import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/core';
import RNSplashScreen from 'react-native-splash-screen';

import { useBusinessAuthentication } from 'containers/Business/BusinessAuthentication';

import { Log } from 'platform/Logger';
import { deepLinkingHandler } from 'router/utils';
import { ACCOUNT_SELECTION, BUSINESS_HOME } from 'router/routeNames';

interface IBusinessAccountProps {
  navigation: any;
}

const BusinessAccount = ({ navigation }: IBusinessAccountProps) => {
  const businessAuthentication = useBusinessAuthentication();

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

    if (businessAuthentication.isAuthenticated) {
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
  }, [businessAuthentication.localChecked]);

  return null;
};

export default React.memo(BusinessAccount);
