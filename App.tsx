/**
 *
 * FideLight App
 *
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import configureStore from './app/configureStore';

const initialState = {};
const store = configureStore(initialState);
enableScreens();

function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to FideLight</Text>
      </View>
    </Provider>
  );
}

export default App;
