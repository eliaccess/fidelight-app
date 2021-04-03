/*
 *
 * HomeScreen
 *
 */

import React from 'react';
import { Text, View } from 'react-native';

import { HomeScreenProps } from './types';

function HomeScreen(_props: HomeScreenProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to FideLight</Text>
    </View>
  );
}

export default React.memo(HomeScreen);
