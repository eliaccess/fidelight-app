/**
 *
 * Loader
 *
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import animations from 'animations';
import Dimensions from 'theme/Dimensions';

const LOADER_WIDTH = 30;
const style = StyleSheet.create({
  container: {
    width: Dimensions.screenWidth,
    height: LOADER_WIDTH / 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: LOADER_WIDTH,
    height: LOADER_WIDTH,
  },
});

export default function Loader() {
  const onAnimationReady = (animation) => {
    if (!animation) {
      return;
    }
    animation.play();
  };
  return (
    <Animatable.View
      useNativeDriver
      animation="fadeIn"
      duration={400}
      easing="ease-in-out"
      style={style.container}
    >
      <LottieView
        style={style.loader}
        source={animations.loader}
        ref={onAnimationReady}
        loop
      />
    </Animatable.View>
  );
}
