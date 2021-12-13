import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';
// import Animated, {
//   Easing,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';
import configs from 'configs';

// import { ThemeContext } from 'theme/ThemeManager';
// import ThemeSwitch from 'theme/ThemeSwitch';

import routes from './routes';
import { SPLASH } from './routeNames';
// import { useGetStyles } from './style';
// import { useOverlay } from './animations';

const Stack = createStackNavigator();

function Router({ onStateChange }) {
  // const style = useGetStyles();
  // // @ts-ignore
  // const { theme } = React.useContext(ThemeContext);
  // const overLayAnimation = useRef(useSharedValue(0)).current;

  // useEffect(() => {
  //   overLayAnimation.value = withTiming(theme === 'dark' ? 1 : 0, {
  //     duration: 400,
  //     easing: Easing.inOut(Easing.ease),
  //   });
  // }, [overLayAnimation, theme]);

  // const animatedStyle = useOverlay(overLayAnimation);
  return (
    <NavigationContainer onStateChange={onStateChange}>
      {/* <Animated.View style={[style.container, animatedStyle]} /> */}
      {/* <ThemeSwitch /> */}
      <Stack.Navigator
        initialRouteName={SPLASH}
        // headerMode="none"
        // mode="card"
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: false,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.5, 0.9, 1],
              }),
            },
            // overlayStyle: {
            //   opacity: progress.interpolate({
            //     inputRange: [0, 1],
            //     outputRange: [0, 1],
            //     extrapolate: 'clamp',
            //   }),
            // },
          }),
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
