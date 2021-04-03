import debounce from 'lodash/debounce';

import React from 'react';
import { StatusBar } from 'react-native';
import RNSplashScreen from 'react-native-splash-screen';

import Router from 'router';

import Colors from 'theme/Colors';

function onStateChange(_state) {}

const debouncedOnStateChange = debounce(onStateChange, 200);
RNSplashScreen.hide();

function AppContainer() {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.statusBar}
        barStyle="dark-content"
        translucent
      />
      <Router onStateChange={debouncedOnStateChange} />
    </>
  );
}

export default AppContainer;
