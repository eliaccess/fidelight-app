import last from 'lodash/last';
import debounce from 'lodash/debounce';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import LocalStorage from 'platform/LocalStorage';
import routeConfigs from 'router/routeConfigs';

import { logScreen } from 'platform/analytics';

import Router from 'router';
import Colors, { lightTheme } from 'theme/Colors';

function onStateChange(state) {
  let route = last(state?.routes);
  // @ts-ignore
  if (route?.state?.routes) {
    // @ts-ignore
    route = route?.state?.routes[route.state.index];
  }
  // @ts-ignore
  if (routeConfigs[route.name]?.selfAnalyticsLogging) {
    return;
  }
  // Log(route);
  logScreen(route);
}

const debouncedOnStateChange = debounce(onStateChange, 200);

function AppContainer() {
  useEffect(() => {
    LocalStorage.setItem('colors', lightTheme);
  });
  return (
    <>
      <StatusBar
        backgroundColor={Colors.statusBar}
        barStyle="light-content"
        translucent
      />
      <Router onStateChange={debouncedOnStateChange} />
    </>
  );
}

export default AppContainer;
