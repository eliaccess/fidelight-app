/* eslint-disable react-hooks/exhaustive-deps */
/*
 *
 * SplashScreen
 *
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import RNSplashScreen from 'react-native-splash-screen';
import { useIsFocused } from '@react-navigation/native';

import { Log } from 'platform/Logger';

import { deepLinkingHandler } from 'router/utils';

import { useAuthentication } from 'containers/Authentication';
import { useUserLocation } from 'containers/UserLocation';
import Image from 'theme/Image';
import {
  ACCOUNT_SELECTION,
  BUSINESS_HOME,
  CITY_SELECTION,
  HOME,
} from 'router/routeNames';

// import messages from './messages';
import style from './style';
import { SplashProps } from './types';

function SplashScreen({ navigation }: SplashProps) {
  // const [showOnboarding, setShowOnboarding] = useState(false);
  const authentication = useAuthentication();
  const userLocation = useUserLocation();
  const isFocused = useIsFocused();

  const onLoad = async () => {
    const deepLink = await deepLinkingHandler();
    Log(JSON.stringify(deepLink));
    RNSplashScreen.hide();
    if (!isFocused) {
      return;
    }

    if (deepLink) {
      const { initialRoute } = deepLink;
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

  return (
    <View style={style.flexContainer} testID="splash">
      <View style={style.logoContainer}>
        <Image title="bgImage" resizeMode="cover" style={style.logo} />
      </View>
    </View>
  );
}

export default React.memo(SplashScreen);
