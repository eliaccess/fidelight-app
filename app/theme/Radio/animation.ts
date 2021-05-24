// import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import Colors from 'theme/Colors';

export function UseSquareAnimation(animationValue) {
  const borderColor = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.textBlack, Colors.accent],
  });
  return {
    borderColor,
  };
}

export function UseInnerSquareAnimation(animationValue) {
  return {
    transform: [
      {
        scale: animationValue,
      },
    ],
    opacity: animationValue,
  };
}
