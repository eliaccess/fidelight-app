import React, { useEffect, useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import configs from 'configs';

import Dimensions from 'theme/Dimensions';

import { ThemeContext } from 'theme/ThemeManager';

import routes from './routes';
import { SPLASH } from './routeNames';
import { useGetStyles } from './style';

const Stack = createStackNavigator();

function Router({ onStateChange }) {
  SplashScreen.hide();
  const style = useGetStyles();
  // @ts-ignore
  const { theme } = React.useContext(ThemeContext);
  const animation = useRef(useSharedValue(0)).current;
  useEffect(() => {
    animation.value = withTiming(theme === 'dark' ? 1 : 0, {
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    });
  }, [animation, theme]);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animation.value,
      [0, 1],
      [0, 0.5],
      Extrapolate.CLAMP,
    );
    const translateX = interpolate(
      animation.value,
      [0, 1],
      [-Dimensions.screenWidth, Dimensions.screenWidth],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateX,
        },
      ],
      opacity,
    };
  });
  return (
    <NavigationContainer onStateChange={onStateChange}>
      <Animated.View style={[style.container, animatedStyle]} />
      <Stack.Navigator
        initialRouteName={SPLASH}
        headerMode="none"
        mode="card"
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: false,
        }}
      >
        {Object.keys(routes).map((routeKey) => (
          <Stack.Screen
            key={routeKey}
            name={routeKey}
            component={routes[routeKey].screen}
            initialParams={configs.initialRouteParams}
            options={routes[routeKey]?.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
