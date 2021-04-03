/*
 *
 * HomeScreen
 *
 */

import React from 'react';
import { View } from 'react-native';
import Text from 'theme/Text';

import { HomeScreenProps } from './types';

function HomeScreen(_props: HomeScreenProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Welcome to FideLight
      </Text>
    </View>
  );
}

export default React.memo(HomeScreen);
