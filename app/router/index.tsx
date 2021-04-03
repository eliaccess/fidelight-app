import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import configs from 'configs';

import routes from './routes';
import { HOME } from './routeNames';

const Stack = createStackNavigator();

function Router({ onStateChange }) {
  return (
    <NavigationContainer onStateChange={onStateChange}>
      <Stack.Navigator
        initialRouteName={HOME}
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
