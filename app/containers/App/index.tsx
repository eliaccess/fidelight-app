import debounce from 'lodash/debounce';
import LocalStorage from 'platform/LocalStorage';

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import Router from 'router';

import Colors, { lightTheme } from 'theme/Colors';

function onStateChange(_state) {}

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
