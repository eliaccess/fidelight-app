import Animated, { Extrapolate } from 'react-native-reanimated';
import Dimensions from 'theme/Dimensions';

const height = Dimensions.screenHeight;

export function UseModalAnimation(animationValue) {
  const opacity = Animated.interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateY = Animated.interpolate(animationValue, {
    inputRange: [0, 1],
    outputRange: [height, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return {
    opacity,

    transform: [
      {
        translateY,
      },
    ],
  };
}
