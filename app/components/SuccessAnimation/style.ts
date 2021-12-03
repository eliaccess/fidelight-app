/**
 *
 * Styles for SuccessAnimation
 *
 */

import { StyleSheet } from 'react-native';

import Dimensions from 'theme/Dimensions';

const style = StyleSheet.create({
  animationWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 100000000000,
    left: '-30%',
  },
  animation: {
    width: Dimensions.screenWidth,
    height: Dimensions.screenHeight,
  },
});

export default style;
