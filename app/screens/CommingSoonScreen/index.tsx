/*
 *
 * CommingSoonScreen
 *
 */

import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import animations from 'animations';

import Screen from 'theme/Screen';
import style from './style';

import { CommingSoonScreenProps } from './types';

function CommingSoonScreen(_props: CommingSoonScreenProps) {
  return (
    <Screen testID="CommingSoonScreen">
      <View style={style.container}>
        <LottieView
          style={style.animation}
          source={animations.commingSoon}
          ref={(animation) => {
            if (!animation) {
              return;
            }
            animation.play();
          }}
        />
      </View>
    </Screen>
  );
}

export default React.memo(CommingSoonScreen);
