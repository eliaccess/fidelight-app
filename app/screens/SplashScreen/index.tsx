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
import Image from 'theme/Image';
import { ACCOUNT_SELECTION, BUSINESS_HOME, HOME } from 'router/routeNames';

// import messages from './messages';
import style from './style';
import { SplashProps } from './types';

function SplashScreen({ navigation }: SplashProps) {
  // const [showOnboarding, setShowOnboarding] = useState(false);
  const authentication = useAuthentication();
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
      if (authentication.user.data?.accountType === 'business') {
        navigation.reset({
          index: 0,
          // @ts-ignore
          routes: [{ name: BUSINESS_HOME }],
        });
        return;
      }
      navigation.reset({
        index: 0,
        // @ts-ignore
        routes: [{ name: HOME }],
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
