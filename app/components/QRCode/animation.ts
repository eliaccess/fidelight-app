import { Extrapolate, interpolate } from 'react-native-reanimated';

import Dimensions from 'theme/Dimensions';

const height = Dimensions.screenHeight;

export function UseQRCodeAnimation(animationValue) {
  const opacity = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateY = interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [height, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return {
    transform: [
      {
        translateY,
      },
    ],
    opacity,
  };
}
